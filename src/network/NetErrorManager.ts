import Endpoints from "./Endpoints";
import { responseLogger } from "./Interceptors";

enum NetErrors {
	MissingConfiguration = 'Missing configuration',
	BadRequest = 'Bad Request',
	NotAuthorized = 'You don\'t have permission to do this.',
	NotFound = 'Not Found',
	Conflict = 'Conflict',
	InternalServerError = 'Looks like we\'re having a problem. Please try again later.',
	TimeoutReached = 'Request took too long. Please try again.'
}

const keywords = ['user', 'transactions', 'transaction'];
type KeywordMatchKey = typeof keywords[number];
type KeywordMatch = Record<KeywordMatchKey, boolean>;


class CNetErrorManager {
	handleError = (error: any) => {
		let errorMessage = '';

		if(error.config.url){
			// URL Keywords for this error URL
			const kw: KeywordMatch = getKeywordMatch(error.config.url);

			// # of '/' in error URL
			const routeSpecificity: number = getRouteSpecificity(error.config.url);

			// Deep copy of Endpoints for bypassing Typescript restrictions
			const Eps: any = JSON.parse(JSON.stringify(Endpoints));

			// Get a list of the endpoints this response config could match to, based on method type.
			const endpointsOfThisMethodType = Object.keys(Endpoints).filter((endpoint: string) => {
				return Eps[endpoint].method === error.config.method;
			}).map((endpoint: string) => ({ name: endpoint, ...Eps[endpoint] }));

			// Find the specific endpoint the response config matches to, based on the keywords the URL
			// uses and how specific the URL is.
			const thisEndpoint = endpointsOfThisMethodType.filter((endpoint: any) => (
				keywordsAreEqual(kw, getKeywordMatch(endpoint.url)) && routeSpecificity === getRouteSpecificity(endpoint.url)
			))[0];

			// If we've matched an available route and an error message exists, use it.
			if(thisEndpoint && thisEndpoint.errorMessage) errorMessage = thisEndpoint.errorMessage;

			if(error.response){
				responseLogger(error.response);

				if(error.response.data){
					errorMessage += error.response.data;
				} else {
					switch(error.response.status) {
						case 400:
							errorMessage += NetErrors.BadRequest;
							break;
						case 401:
							errorMessage += NetErrors.NotAuthorized;
							break;
						case 404:
							errorMessage += NetErrors.NotFound;
							break;
						case 409:
							errorMessage += NetErrors.Conflict;
							break;
						case 500:
							errorMessage += NetErrors.InternalServerError;
							break;
						default:
							break;
					}
				}

				if(errorMessage) {
					return Promise.reject(errorMessage);
				}
			} else if(error.message && error.message.indexOf('timeout of ') === 0) {
				return Promise.reject(NetErrors.TimeoutReached);
			}

			// This is currently an unsupported error, so allow it to fall thorugh.
			return Promise.reject(error);
		}
	}
}

// Returns the specificity of a url (# of /)
const getRouteSpecificity = (url: string): number => {
	let specificityLevel = 0;
	while (url.indexOf('/') >= 0) {
		specificityLevel++;
		url = url.replace('/', '');
	}

	return specificityLevel;
}

const getKeywordMatch = (url: string) => {
	const kwm: { [key: string]: boolean } = {};
	keywords.forEach((kw: KeywordMatchKey) => {
		kwm[kw] = url.indexOf(kw) >= 0
	});

	return kwm as KeywordMatch;
}

const keywordsAreEqual = (kwm1: KeywordMatch, kwm2: KeywordMatch): boolean =>
	keywords.every((kw: KeywordMatchKey) => kwm1[kw] === kwm2[kw]);

export const NetErrorManager = new CNetErrorManager();