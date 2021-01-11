import { AxiosRequestConfig, AxiosResponse } from 'axios';

export const requestLogger = (request: AxiosRequestConfig): AxiosRequestConfig => {
	console.log('-----------------------------------------------------------------');
	console.log(
		`Interceptor:requestLogger: ${Date.now()}
		Sending Request		: ${request.url}
		Request Method		: ${request.method}
		Request Headers		: ${JSON.stringify(request.headers)}
		Request Body		: ${JSON.stringify(request.data || {})}`);
	console.log('-----------------------------------------------------------------');
	return request;
}

export const responseLogger = (response: AxiosResponse): AxiosResponse => {
	console.log('-----------------------------------------------------------------');
	console.log(
		`Interceptor:responseLogger: ${Date.now()}
		Received Response	: ${response.status} : ${response.config.url}
		Response Headers	: ${JSON.stringify(response.config.headers)}
		Received Data		: ${JSON.stringify(response.data)}`);
	console.log('-----------------------------------------------------------------');
	return response;
}