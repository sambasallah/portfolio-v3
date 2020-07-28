<template>
	<nav :class="isMenuOpen ? 'navbar active' : 'navbar'">
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
	background-color: rgba($slate, 0.2); // #dbdde3
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	transition: all 0.3s ease;

	@media screen and (min-width: $bp5) {
		height: 100%;
		width: 100px;
		border-right: 1px solid $black;
		flex-direction: column;
		align-items: unset;
	}

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
		font-family: 'FF Meta VF';

		strong {
			font-family: 'FF Meta VF';
			font-weight: 600;
		}

		@media screen and (min-width: $bp5) {
			margin-left: 0.5em;
		}
	}
}
</style>
