<template>
	<Page class="page" actionBarHidden="true">
		<ScrollView>
			<StackLayout class="panel">
				<Label text="Username: "/>
				<TextField v-model="username" />

				<Label text="Password: "/>
				<TextField v-model="password" :secure="true"/>

				<Button text="Login" @tap="login"/>
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
	export default {
		data() {
			return {
				username: 'admin',
				password: 'admin'
			}
		},

		methods: {
			login() {
				this.$store.dispatch('auth/login', {
					username: this.username,
					password: this.password
				})

				.then(() => this.$navigator.navigate('/account'))
				.catch(e => alert('Failed Authentication'))
			}
		}
	}
</script>

<style media="screen" lang="scss" scoped>
	.panel {
		padding: 10;
	}
</style>
