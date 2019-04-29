<template>
	<Navigator :defaultRoute="entry" />
</template>

<script>

export default {
	computed: {
		entry() {
			return this.$store.getters.isLoggedIn ? '/home' : '/login'
		}
	}
}

</script>
