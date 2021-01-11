export interface IAppConfig {
	apiBaseUrl: string;
}

export const getAppConfig = async (): Promise<IAppConfig> => {
	let config;
	switch(process.env['REACT_APP_ENV']) {
		case 'dev':
			config = await import('./env.dev');
			break;
		default:
			config = await import('./env.dev');
			break;
	}

	return config.default;
}