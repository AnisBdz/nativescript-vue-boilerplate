<template>
	<Page class="page">
		<ActionBar title="Home" class="action-bar" />
		<ScrollView>
			<StackLayout class="home-panel">
				<Label text="Hello, World!" />
				<Image src="~/assets/images/NativeScript-Vue.png" />

				<Button text="Item #1" @tap="showItem(1)" />
				<Button text="Item #2" @tap="showItem(2)" />
				<Button text="Item #3" @tap="showItem(3)" />

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
			},

			showItem(id) {
				this.$navigator.navigate('/item', { id })
			}
		}
	}
</script>
