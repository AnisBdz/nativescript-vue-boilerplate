import Vue from 'nativescript-vue'
import App from './App'
import './router'

import store from './store';
Vue.prototype.$store = store

// import VueDevtools from 'nativescript-vue-devtools'
//
// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


const app = new Vue({
	render: h => h(App)
})

app.$start()
