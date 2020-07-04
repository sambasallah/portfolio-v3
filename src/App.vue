<template>
	<div id="app" >
		<navbar />
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import Navbar from '@/components/Navbar.vue';

	export default {
		components: {
			Navbar
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,350,400,400i,700,700i');

	#app {
		height: 100%;
	}

</style>
