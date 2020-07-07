<template>
	<div class="navbar-menu">
		<ul class="navbar-items">
			<li v-for="(route, index) in $router.options.routes" :key="index">
				<router-link
					:to="route.path"
					@click.native="closeMenu"
				>
					{{ route.name }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	/* eslint-disable import/extensions */
	/* eslint-disable import/no-unresolved */
	import { mutations } from 'src/store.js';

	export default {
		name: 'NavMenu',
		methods: {
			closeMenu() {
				mutations.toggleNav();
			}
		}
	};
</script>

<style lang="scss" scoped>
	.navbar {

		&-menu {
			position: absolute;
			z-index: -1;
			top: 0;
			height: 100vh;
			width: 100vw;
			background: rgba($black, 0.8);
			display: flex;
			justify-content: center;
			align-items: center;

			#mountains {
				@include mountains;
			}
		}

		&-items {
			position: absolute;
			z-index: 5;
			list-style: none;
			padding: 0;
			margin: 0;

			a {
				color: $white;
				font-size: 2.5em;
				text-transform: uppercase;
				background-image: none;

				&:hover {
					background-size: 0%;

					&:after {
						content: ' »';
					}
				}

				&.router-link-exact-active {
					color: $mint;
				}
			}
		}
	}
</style>
