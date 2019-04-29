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
				username: '',
				password: ''
			}
		},

		methods: {
			login() {
				this.$store.dispatch('login', {
					username: this.username,
					password: this.password
				})

				.then(() => this.$navigator.navigate('/home'))
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
