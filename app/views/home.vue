<template>
	<Page class="page">
		<ActionBar title="Home" class="action-bar" />
		<ScrollView>
			<StackLayout class="home-panel">
				<Label text="Hello, World!" />
				<Image src="~/assets/images/NativeScript-Vue.png" />

				<Button text="Account" @tap="account" />
				<Button v-if="loggedIn" text="Logout" @tap="logout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
	export default {
		computed: {
			loggedIn() {
				return this.$store.getters.isLoggedIn
			}
		},

		methods: {
			logout() {
				this.$store.dispatch('logout')
				this.$navigator.navigate('/login')
			},

			account() {
				this.$navigator.navigate('/account')
			}
		}
	}
</script>
