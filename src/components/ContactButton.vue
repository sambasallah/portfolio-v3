<template>
	<section
		class="contact-cta"
		:class="{ active: isContactDrawerOpen, 'position-bottom': routeIsHome }"
		:style="{ bottom: contactHeight + 'px' }"
	>
		<button
			type="button"
			class="contact-button"
			@click.prevent="openContact"
			aria-label="Open Contact Section"
		>
			<svg
				viewBox="0 0 16 15"
				role="img"
				:class="{ active: isContactDrawerOpen }"
				labelledby="paperPlane"
			>
				<title
					id="paperPlane"
				>Paper airplane used to symbol throwing a paper airplane note to communicate</title>
				<use xlink:href="../assets/svgs/paper-plane.svg#paper-plane" />
			</svg>
		</button>
	</section>
</template>

<script>
import Vue from 'vue';
/* eslint-disable import/extensions */
import { store, mutations } from 'src/store.js';

export default {
	name: 'ContactButton',
	data() {
		return {
			contactHeight: 0
		};
	},
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

			Vue.nextTick(() => {
				if (this.contactHeight === 0) {
					this.contactHeight = document.getElementById('contact-section').offsetHeight;
				} else {
					this.contactHeight = 0;
				}
			});
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
			position: fixed;
			animation: slide-in-blurred-bottom 0.8s both;
		}
	}

	&-button {
		background: none;
		border: none;

		&:focus {
			outline: 0;
		}

		svg {
			height: 2em;
			color: $mint;
			text-shadow: 0 1px 2px lighten($white, 40%);
			transition: color 0.6s ease;

			&:hover,
			&:focus {
				cursor: pointer;
				color: lighten(#383d95, 20%);
			}

			&:active,
			&.active {
				cursor: pointer;
				color: lighten(#383d95, 10%);
			}
		}
	}
}
</style>
