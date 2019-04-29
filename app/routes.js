import Home from '@/views/home'
import Login from '@/views/login'

export default {
	'/home':  { component: Home,  meta: { auth: true  } },
	'/login': { component: Login, meta: { auth: false } }
}
