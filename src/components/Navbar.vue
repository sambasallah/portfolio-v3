<template>
	<nav
		:class="menuOpened ? 'navbar active' : 'navbar'"
	>
		<div class="navbar-wrapper">
			<span class="brand" title="Christa Weaver">christa<strong>weaver</strong></span>
			<button class="navbar-hamburger"
				id="toggle-nav"
				:class="menuOpened ? 'menu-button active' : 'menu-button'"
				@click="toggleMenu"
			>
				<span></span>
			</button>
		</div>

		<transition name="fade" mode="out-in">
			<nav-menu v-if="menuOpened" />
		</transition>
	</nav>
</template>

<script>
	import NavMenu from '@/components/NavMenu.vue';

	export default {
		name: 'Navbar',
		data() {
			return {
				menuOpened: false
			};
		},
		components: {
			NavMenu
		},
		methods: {
			toggleMenu() {
				this.menuOpened = !this.menuOpened;

				if (this.menuOpened)
					document.body.style.overflow = 'hidden';
				else
					document.body.style.overflow = 'auto';
			}
		}
	};
</script>

<style lang="scss" scoped>
	.navbar {
		position: relative;
		z-index: 9999;
		width: 100%;
		top: 0;
		background-color: rgba($slate, 0.2);
		height: 60px;
		display: flex;
		justify-content: center;

		&.active {
			background-color: rgba($slate, 0.9);
		}

		.brand {
			color: $skyblue;
			font-size: 2em;
			font-weight: 300;
			letter-spacing: 0.1px;

			strong {
				font-weight: 600;;
			}
		}

		&-wrapper {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			max-width: 1400px;
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
