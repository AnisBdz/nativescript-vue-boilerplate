import Home from '@/views/home'
import Login from '@/views/login'
import Account from '@/views/account'

export default {
	'/home': {
		component: Home
	},

	'/account': {
		component: Account,
		middlewares: ['auth']
	},

	'/login': {
		component: Login
	}
}
