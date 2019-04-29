<template>
	<Page class="page">
  		<ActionBar title="Account" class="action-bar" />
  		<ScrollView>
  			<StackLayout class="home-panel">
  				<Label text="Username: " />
				<Label :text="user.username" />

  				<Button text="Home" @tap="goHome" />
  			</StackLayout>
  		</ScrollView>
  	</Page>
</template>

<script>
	export default {
		computed: {
			user() {
				return this.$store.state.user || {}
			}
		},

		methods: {
			goHome() {
				this.$navigator.navigate('/home')
			}
		}
	}
</script>
