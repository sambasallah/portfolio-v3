<template>
	<div id="app" >
		<navbar />
		<transition name="slide" mode="out-in">
			<div class="content-container">
				<router-view />
			</div>
		</transition>
	</div>
</template>

<script>
	import Navbar from '@/components/navigation/Navbar.vue';

	export default {
		components: {
			Navbar
		}
	};
</script>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,350,400,400i,700,700i');
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap');

	#app {
		height: 100%;
	}

	.content-container {
		margin-left: 200px;
	}

</style>
