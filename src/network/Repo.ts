import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IRepo } from './IRepo';
import { requestLogger, responseLogger } from './Interceptors';
import { NetErrorManager } from './NetErrorManager';
import Endpoints from './Endpoints';

class CRepo implements IRepo {
	config: AxiosRequestConfig;
	net: AxiosInstance;
	initialized = false;

	constructor(axiosConfig: AxiosRequestConfig) {
		this.config = axiosConfig;
		this.net = axios.create();
		this.init();
	}

	async init() {
		this.config.baseURL = process.env.REACT_APP_API_BASE_URL;

		this.net.interceptors.request.use(requestLogger);

		this.net.interceptors.response.use(responseLogger, (e) =>
			NetErrorManager.handleError(e)
		);

		this.initialized = true;
	}

	async makeRequest<T>(config: any): Promise<AxiosResponse<T>> {
		const request = { ...config, ...this.config };
		return this.net(request);
	}

	setAuthHeader(token: string) {
		this.net.defaults.headers.common['Authorization'] = `bearer ${token}`;
	}

	async connect(name: string, email: string, service: string, message: string): Promise<boolean> {
		const request = {
			...Endpoints.connect,
			data: {
				name,
				email,
				service,
				message
			}
		}

		const response = await this.makeRequest(request);
		const data: any = response.data;

		return data.emailSent;
	}
}

export const Repo = new CRepo({ timeout: 30000 });