import Middleware from '@/middlewares/Middleware'

export default new Middleware(function (next) {
	// must be logged in
	if (this.$store.getters.isLoggedIn) next()

	// show login else
	else this.$navigator.navigate('/login', {}, { clearHistory: true })
})
