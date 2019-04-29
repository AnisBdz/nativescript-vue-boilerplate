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
