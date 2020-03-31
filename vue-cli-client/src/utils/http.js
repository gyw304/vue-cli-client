import axios from 'axios';

//设置请求拦截 设置统一的header
axios.interceptors.request.use(config => {
	
	if(localStorage.token){
		config.headers = {
			'Authorization': localStorage.token
		}
	}
	
	// config.headers.common = {
	// 	'Content-Type': "application/x-www-form-urlencoded",
	// 	'Access-Control-Allow-Origin':'*',
	// 	'Access-Control-Allow-Headers':'X-Requested-With,Content-Type',
	// 	'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
	// 	'Authorization': localStorage.token==undefined?'':localStorage.token
	// }
	
	return config

	// return config;
})

export default axios;