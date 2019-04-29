<template>
	<Page class="page">
  		<ActionBar title="Item" class="action-bar" />
  		<ScrollView>
  			<StackLayout class="home-panel">
  				<Label text="My ID is: " />
				<Label :text="id" />

  				<Button text="Home" @tap="goHome" />
  			</StackLayout>
  		</ScrollView>
  	</Page>
</template>

<script>
	export default {
		computed: {
			id() {
				return this.$navigator.params.id
			}
		},

		methods: {
			goHome() {
				this.$navigator.navigate('/home')
			}
		}
	}
</script>
