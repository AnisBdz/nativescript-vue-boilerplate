<template>
	<Navigator :defaultRoute="entry" />
</template>

<script>

export default {
	computed: {
		entry() {
			return '/home'
		}
	}
}

</script>

<style lang="scss">
	@import '@/assets/styles/app';
</style>
