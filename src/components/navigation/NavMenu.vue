<template>
	<div class="navbar-menu">
		<ul class="navbar-items">
			<li v-for="(route, index) in $router.options.routes" :key="index">
				<router-link :to="route.path" @click.native="closeMenu">{{ route.name }}</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
import { mutations } from 'src/store';

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
		left: 0;
		height: 100vh;
		width: 100vw;
		background: rgba($black, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
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
			transition: all 0.5s;

			&:hover {
				color: $mint;
			}

			&:hover:after {
				visibility: visible;
			}

			&:after {
				visibility: hidden;
				content: ' »';
				position: absolute;
				margin-left: 5px;
			}

			&.router-link-exact-active {
				color: $purple;
				text-shadow: 0 1px 2px lighten($white, 40%);
				padding: 0 10px;
				@include mint-gradient-background;
				border-radius: 4px;
				font-style: italic;

				&:after {
					content: '';
				}
			}
		}
	}
}
</style>
