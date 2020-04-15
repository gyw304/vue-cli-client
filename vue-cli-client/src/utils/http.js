import axios from 'axios';
import router from '../router/index'

//设置请求拦截 设置统一的header
axios.interceptors.request.use(config => {
	if (localStorage.token) {
		config.headers = {
			'Authorization': localStorage.token
		}
	}
	return config
})


axios.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (error.response) {
			switch (error.response.status) {
				// 401: 未登录
				// 未登录则跳转登录页面，并携带当前页面的路径
				// 在登录成功后返回当前页面，这一步需要在登录页操作。                
				case 401:
					router.replace({
						path: '/login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
					break;
				// 403 token过期
				// 登录过期对用户进行提示
				// 清除本地token和清空vuex中token对象
				// 跳转登录页面                
				case 403:
					localStorage.removeItem('token');
					//跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
					router.replace({
						path: '/login',
						query: {
							redirect: router.currentRoute.fullPath
						}
					});
					break;
				// 403 token过期
				// 登录过期对用户进行提示
				// 清除本地token和清空vuex中token对象
				// 跳转登录页面                
				case 404:
					console.error('请求不存在')
					break;
				default:
				console.error(error.response.data.message)
			}
			return Promise.reject(error.response);
		}
	}
)


export default axios;
