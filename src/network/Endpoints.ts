const GetRequest = {
	method: 'get',
	responseType: 'json',
};

const PostRequest = {
	method: 'post',
	responseType: 'json',
};

const PutRequest = {
	method: 'put',
	responseType: 'json',
};

const DeleteRequest = {
	method: 'delete',
	responseType: 'json',
	contentType: 'application/json',
};

const endpoints = {
	connect: {
		...PostRequest,
		...{
			url: '/connect/',
		},
	},
	ping: {
		...GetRequest,
		...{
			url: '/ping'
		}
	}
};

export default endpoints;