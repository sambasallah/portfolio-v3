<template>
	<section
		class="contact-cta"
		:class="{ 'active' : isContactDrawerOpen }"
	>
		<button
			type="button"
			class="btn btn--secondary contact-button"
			@click.prevent="openContact"
		>
			Contact
		</button>
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
			position: fixed;
			bottom: 0;
			width: 100%;
			margin-bottom: .5em;
			display: flex;
			justify-content: center;
			animation: slide-down 0.5s both;
			transform: all ease 0.5s;

			&.active {
				animation: slide-in-blurred-bottom  0.8s both;
				bottom: 75vh;
			}
		}
	}

	@keyframes slide-top {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(-5px);
			transform: translateY(-5px);
		}
	}


	@keyframes slide-down {
		0% {
			-webkit-transform: translateY(-20px);
			transform: translateY(-20px);
		}
		100% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
	}
	@keyframes slide-in-blurred-bottom {
	0% {
		-webkit-transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
				transform: translateY(1000px) scaleY(2.5) scaleX(0.2);
		-webkit-transform-origin: 50% 100%;
				transform-origin: 50% 100%;
		-webkit-filter: blur(40px);
				filter: blur(40px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateY(0) scaleY(1) scaleX(1);
				transform: translateY(0) scaleY(1) scaleX(1);
		-webkit-transform-origin: 50% 50%;
				transform-origin: 50% 50%;
		-webkit-filter: blur(0);
				filter: blur(0);
		opacity: 1;
	}
	}


</style>

