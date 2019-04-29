import Vue from 'nativescript-vue'

import Navigator from 'nativescript-vue-navigator'
import routes from '@/routes'
import middlewares from '@/middlewares'

Vue.use(Navigator, { routes })

// add middleware functionality
Vue.prototype.$navigator._navigate_ = Vue.prototype.$navigator.navigate

Vue.prototype.$navigator.navigate = async function (to, options) {

	let route = routes[to]

	// check if route exists
	if (!route) throw new Error(`Route ${to} not found`)

	// check if it requires middlewares
	if (route.middlewares && route.middlewares.length) {

		for (let middlewareName of route.middlewares) {

			let middleware = middlewares[middlewareName]

			// check if middleware exists
			if (!middleware) throw new Error(`Middleware ${middlewareName} not found`)

			// pass through the middlware
			await new Promise((resolve, reject) => {
				middleware.handler(resolve)
			})
		}
	}

	// navigate to route
	this._navigate_(to, options)
}
