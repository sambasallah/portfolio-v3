<template>
	<section class="contact-cta" :class="{ active: isContactDrawerOpen, 'position-bottom': routeIsHome }">
		<button type="button" class="btn btn--secondary contact-button" @click.prevent="openContact">Contact</button>
	</section>
</template>

<script>
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { store, mutations } from 'src/store.js';

export default {
	name: 'ContactButton',
	computed: {
		isContactDrawerOpen() {
			return store.isContactOpen;
		},
		routeIsHome() {
			return this.$route.name === 'home';
		}
	},
	methods: {
		openContact() {
			mutations.toggleContact();
		}
	}
};
</script>

<style lang="scss">
.contact {
	&-cta {
		grid-row-start: 2;
		grid-row-end: 3;
		width: 100%;
		height: 45px;
		margin-bottom: 0.5em;
		display: flex;
		justify-content: center;
		animation: slide-down 0.5s both;
		transform: all ease 0.5s;

		&.position-bottom {
			position: absolute;
			bottom: 0;
			z-index: 6;
		}

		&.active {
			position: absolute;
			animation: slide-in-blurred-bottom 0.8s both;
			bottom: 50vh;
		}
	}
}
</style>
