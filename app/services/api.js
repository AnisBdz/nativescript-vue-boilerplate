import axios from 'axios'
import Vue from 'nativescript-vue'

// create custom axios instance
const api = axios.create({
	baseURL: 'http://localhost:3333'
})

// setup defaults
instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

// create vue instance to handle routing
const vue = new Vue()

// setup unauthorozation interseptor
const interseptor = api.interceptors.request.use(() => {}, error => {
	if (error.response) {
    	if (error.response.status == 401) { // 401 Unauthorized
			vue.$store.dispatch('auth/logout')
			vue.$navigator.navigate('/login')
		}
	}
})


export default api
