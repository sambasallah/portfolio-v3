<template>
	<nav :class="isMenuOpen ? 'navbar active' : 'navbar'">
		<div class="navbar_items">
			<hamburger />
			<span class="brand" title="Christa Weaver">cw</span>

			<transition name="fade" mode="out-in">
				<nav-menu v-if="isMenuOpen">
					<slot></slot>
				</nav-menu>
			</transition>
		</div>
	</nav>
</template>

<script>
import { store } from 'src/store';
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
	width: 100%;
	height: 60px;
	padding: 0.25em 1em;
	transition: all 0.3s ease;

	&_items {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media screen and (min-width: $bp5) {
			flex-direction: column;
			align-items: center;
			left: 0;
			position: absolute;
			height: 100%;
		}
	}

	@media screen and (min-width: $bp5) {
		height: 100%;
		width: 85px;
		border-right: 1px solid $black;
		padding: 0;
	}

	@media screen and (min-width: $bp5) {
		&:after {
			content: ' ';
			position: absolute;
			top: 0;
			bottom: 0;
			height: 100%;
			right: -8px;
			border: 1px solid $black;
		}
	}

	&.active {
		transition: all 0.3s ease;
		background-color: rgba($slate, 0.9);
	}

	.brand {
		color: $skyblue;
		font-size: 2em;
		font-weight: 300;
		letter-spacing: 0.1px;
		font-family: 'FF Meta VF';
		height: 40px;
		margin-bottom: 0.25em;

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
