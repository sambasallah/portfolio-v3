<template>
	<nav
		:class="isMenuOpen ? 'navbar active' : 'navbar'"
	>
		<hamburger />
		<span class="brand" title="Christa Weaver">c<strong>w</strong></span>

		<transition name="fade" mode="out-in">
			<nav-menu v-if="isMenuOpen">
				<slot></slot>
			</nav-menu>
		</transition>
	</nav>
</template>

<script>
	/* eslint-disable import/extensions */
	/* eslint-disable import/no-unresolved */
	import { store } from 'src/store.js';
	import Hamburger from './Hamburger.vue';
	import NavMenu from './NavMenu.vue';

	export default {
		name: 'Navbar',
		components: {
			Hamburger,
			NavMenu
		},
		computed: {
			isMenuOpen() {
				return store.isNavOpen;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.navbar {
		position: fixed;
		z-index: 10;
		top: 0;
		background-color: rgba($slate, 0.2);
		height: 100%;
		width: 115px;
		border-right: 1px solid $black;
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		&:after {
			content: ' ';
			position: absolute;
			top: 0;
			bottom: 0;
			height: 100%;
			right: -8px;
			border: 1px solid $black;
		}

		&.active {
			background-color: rgba($slate, 0.9);
		}


		.brand {
			color: $skyblue;
			font-size: 2em;
			font-weight: 300;
			letter-spacing: 0.1px;
			font-family: "FF Meta VF";

			strong {
				font-family: "FF Meta VF";
				font-weight: 600;
			}
		}

		&-hamburger {
			background: transparent;
			position: relative;
			border: 0;
			width: 50px;
			height: 3px;
			outline: none;

			&:hover {
				cursor: pointer;
			}

			span,
			span:before,
			span:after {
				position: absolute;
				content: '';
				width: 30px;
				height: 3px;
				background: $white;
				transition: 500ms cubic-bezier(0.77, 0, 0.175, 1);
				right: 0;
			}
		}

		.menu-button span::before {
			top: -8px;
		}

		.menu-button span::after {
			top: 8px;
		}

		.menu-button:hover > span,
		.menu-button:hover > span::before,
		.menu-button:hover > span::after {
			background: $mint;
		}

		.menu-button.active {

			& > span  {
				background: transparent;

				&::before  {
					transform: rotate(-225deg);
					top: 0px;
				}

				&::after  {
					transform: rotate(225deg);
					top: 0px;
				}
			}
		}
	}

</style>
