<template>
	<div id="app">
		<navbar />
		<transition name="slide" mode="out-in">
			<router-view :class="{ 'content-container': !routeIsHome }" />
		</transition>
		<contact-button />
		<contact />
	</div>
</template>

<script>
import ContactButton from '@/components/ContactButton.vue';
import Contact from '@/views/Contact.vue';
import Navbar from '@/components/navigation/Navbar.vue';

export default {
	components: {
		ContactButton,
		Contact,
		Navbar
	},
	computed: {
		routeIsHome() {
			return this.$route.name === 'home';
		}
	}
};
</script>

<style lang="scss">
#app {
	height: 100%;
	display: grid;
	grid-template-rows: 1fr auto;
	overflow-x: hidden;
}

.content-container {
	background-image: url('./assets/images/spiral.svg');
	background-position: -100px bottom;
	background-repeat: no-repeat;
	background-attachment: fixed, scroll;
	padding: 1em 2em;
	margin-top: 50px;
	width: 100vw;

	@media (min-width: $bp5) {
		min-height: calc(100vh - 145px);
		margin-left: 150px;
		margin-top: 100px;
		width: 75vw;
		background-position: 160px bottom;
	}
}
</style>
