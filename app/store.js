import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		userToken: '',
		user: null
	},

	getters: {
		isLoggedIn(state) {
			return state.userToken != ''
		}
	},

	mutations: {
		SET_USER_TOKEN(state, token) {
			state.userToken = token
		},

		SET_USER(state, user) {
			state.user = user
		}
	},

	actions: {
		login(context, auth) {
			return new Promise((resolve, reject) => {
				if (auth.username == 'admin' && auth.password == 'admin') {
					context.commit('SET_USER_TOKEN', 'deadbeef')
					context.commit('SET_USER', {
						username: 'admin'
					})

					resolve()
				}

				else reject()
			})
		},

		logout(context) {
			context.commit('SET_USER_TOKEN', '')
			context.commit('SET_USER', null)
		}
	}
});
