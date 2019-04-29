<template>
	<Page class="page">
		<ActionBar title="Home" class="action-bar" />
		<ScrollView>
			<StackLayout class="home-panel">
				<Label text="Hello, World!" />
				<Image src="~/assets/images/NativeScript-Vue.png" />

				<Button text="Logout" @tap="logout" />
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
	export default {
		methods: {
			logout() {
				this.$store.dispatch('logout')
				this.$navigator.navigate('/login')
			}
		}
	}
</script>
