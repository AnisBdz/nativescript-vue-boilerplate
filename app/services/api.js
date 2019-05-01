import axios from 'axios'
import Vue from 'nativescript-vue'

// create custom axios instance
const api = axios.create({
	baseURL: 'http://192.168.1.41:3333'
})

// setup defaults
api.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// create vue instance to handle routing
const vue = new Vue()

// setup unauthorozation interceptor
const interceptor = api.interceptors.response.use(config => config, error => {
	if (error.response) {
    	if (error.response.status == 401) { // 401 Unauthorized
			vue.$store.dispatch('auth/logout')
			vue.$navigator.navigate('/login')
		}
	}

	return Promise.reject(error)
})


export default api
