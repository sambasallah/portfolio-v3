<template>
	<div id="app" :class="{ 'spiral': !routeIsHome }">
		<navbar />
		<transition name="slide" mode="out-in">
			<div :class="{ 'content-container': !routeIsHome }">
				<router-view />
			</div>
		</transition>
		<contact-button />
		<contact />
	</div>
</template>

<script>
import ContactButton from '@/components/ContactButton.vue';
import Contact from '@/views/Contact.vue';
import Navbar from '@/components/navigation/Navbar.vue';
import Stars from '@/assets/images/Stars.vue';

export default {
	components: {
		ContactButton,
		Contact,
		Navbar,
		Stars
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
}

.content-container {
	margin-left: 200px;
	position: absolute;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	overflow: hidden;

	> div {
		// border-width: 3px;
		// border-style: solid;
		// border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 1 100%;
		padding: 1em 2em;

		@media (min-width: $bp5) {
			width: 75vw;
		}
	}
}
.spiral-hero {
	height: 100%;
}
.spiral {
	background-image: url('./assets/images/spiral.svg');
	position: absolute;
	width: 50vw;
	background-position: bottom;
	bottom: 0;
	background-repeat: no-repeat;
	color: $white;
	fill: $white;
}
</style>
