import Vue from 'nativescript-vue'
// import App from './components/App'
import store from './store';

import Navigator from 'nativescript-vue-navigator'
import routes from './routes'
Vue.use(Navigator, { routes })
Vue.prototype.$store = store

import App from './App'

// import VueDevtools from 'nativescript-vue-devtools'
//
// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


const app = new Vue({
	store,
	render: h => h(App)
})

app.$start()
