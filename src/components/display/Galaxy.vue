<template>
	<div class="galaxy">
		<svg class="galaxy-stars" viewBox="0 0 665 861">
			<stars />
			<path
				fill="url(#stars)"
				stroke="#DBDBDB"
				stroke-width="2"
				d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"
			/>
		</svg>
		<svg class="galaxy-stars__background" viewBox="0 0 665 861">
			<linearGradient id="myGradient" gradientTransform="rotate(90)">
				<stop offset="0%" stop-color="#040d30" />
				<stop offset="52%" stop-color="#1b2947" />
				<stop offset="86%" stop-color="#383d95" />
				<stop offset="100%" stop-color="#383d95" />
			</linearGradient>
			<path
				fill="url(#myGradient)"
				d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"
			/>
		</svg>
		<svg class="galaxy-outline" viewBox="0 0 650 875">
			<path
				fill="none"
				stroke="#DBDBDB"
				stroke-width="2"
				d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"
			/>
		</svg>
	</div>
</template>

<script>
import Stars from './Stars.vue';

export default {
	name: 'Galaxy',
	components: {
		Stars
	}
};
</script>

<style lang="scss">
.galaxy {
	position: absolute;
	top: 0;
	right: 0;
	height: 100vh;

	&-stars {
		position: relative;
		height: 90vh;
		z-index: 3;

		&__background {
			position: absolute;
			top: 0;
			right: 0;
			z-index: 1;
		}
	}

	&-outline {
		position: absolute;
		top: 0;
		right: 0;
		max-height: 90vh;
		width: 100%;
		transform: scale(1.2);
		transform-origin: right;
	}
}
</style>