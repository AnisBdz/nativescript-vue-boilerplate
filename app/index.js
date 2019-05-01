import Vue from 'nativescript-vue'
import App from '@/App'
import '@/routing'
import '@/state'

// import VueDevtools from 'nativescript-vue-devtools'
//
// if(TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }

import api from '@/services/api'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = false

const app = new Vue({
	render: h => h(App)
})

app.$start()
