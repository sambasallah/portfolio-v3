<template>
	<div>
		<button
			type="button"
			class="hamburger-button"
			:class="{ 'active' : isBurgerActive }"
			@click.prevent="toggle"
			:title="hamburgerTitle"
		>
			<span class="bar"></span>
			<span class="bar"></span>
			<span class="bar"></span>
		</button>
		<span class="hamburger-title">{{ hamburgerTitle }}</span>
	</div>
</template>

<script>
	/* eslint-disable import/extensions */
	/* eslint-disable import/no-unresolved */
	import { store, mutations } from 'src/store.js';

	export default {
		name: 'Hamburger',
		computed: {
			isBurgerActive() {
				return store.isNavOpen;
			},
			hamburgerTitle() {
				return this.isBurgerActive ? 'Close' : 'Menu';
			}
		},
		methods: {
			toggle() {
				mutations.toggleNav();
			}
		}
	};
</script>
<style lang="scss">
	.hamburger-button {
		position: relative;
		cursor: pointer;
		height: 40px;
		width: 35px;
		display: block;
		z-index: 999;
		border: 0;
		border-radius: 0;
		background-color: transparent;
		pointer-events: all;
		transition: transform .6s cubic-bezier(.165,.84,.44,1);

		.bar {
			//background-color: #130f40;
			background-color: $white;
			position: absolute;
			right: 0;
			left: 0;
			height: 2px;
			transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);

			&:nth-of-type(1) {
				transform: translateY(-6px);
			}

			&:nth-of-type(2) {
				transform-origin: 0% 00%;
				transform: scaleX(.7);
			}

			&:nth-of-type(3) {
				transform: translateY(6px);
			}
		}

		&:hover .bar {
			background-color: $mint;

			&:nth-of-type(2) {
				transform: scaleX(1);
			}
		}

		&:focus {
			outline: 0;
			border: 0;
		}

		&.active,
		:active {

			&.hamburger-button {
				transform: rotate(-180deg);
			}

			.bar {
				background-color: #B00200;

				&:nth-of-type(1) {
					transform: rotate(45deg);
				}

				&:nth-of-type(2) {
					opacity: 0;
				}

				&:nth-of-type(3) {
					transform: rotate(-45deg)
				}
			}
		}
	}

	.hamburger-title {
		color: $white;
		font-size: .8em;
		font-weight: 200;
		text-transform: uppercase;
		position: absolute;
		margin-top: -7px;
	}
</style>
