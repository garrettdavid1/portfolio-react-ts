export interface IRepo {
	connect(name: string, email: string, service: string, message: string): Promise<boolean>;
	ping(): Promise<boolean>
}