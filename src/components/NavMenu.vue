<template>
	<div class="navbar-menu">
		<ul class="navbar-items">
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/blog">Blog</router-link></li>
			<li><router-link to="/style-guide">Style Guide</router-link></li>
		</ul>

		<div id="mountains" v-if="$route.name !== 'home'"></div>
	</div>
</template>

<script>
	export default {
		name: 'NavMenu'
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
