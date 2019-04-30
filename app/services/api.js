import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3333'
})

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'

export default api
