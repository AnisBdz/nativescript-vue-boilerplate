import Home from '@/views/home'
import Login from '@/views/login'
import Account from '@/views/account'
import Item from '@/views/item'

export default {
	'/home': {
		component: Home
	},

	'/item': {
		component: Item
	},

	'/account': {
		component: Account,
		middlewares: ['auth']
	},

	'/login': {
		component: Login
	}
}
