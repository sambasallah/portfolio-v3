<template>
	<div class="home">
		<div class="hero">
			<svg class="hero-stars" viewBox="0 0 665 861">
				<stars />
				<path fill="url(#stars)" stroke="#FAE0E6" stroke-width="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
			<svg class="hero-stars__background" viewBox="0 0 665 861">
				<linearGradient id="myGradient" gradientTransform="rotate(90)">
					<stop offset="0%"  stop-color="#040d30" />
					<stop offset="52%" stop-color="#1b2947" />
					<stop offset="86%" stop-color="#383d95" />
					<stop offset="100%" stop-color="#383d95" />
				</linearGradient>
				<path fill="url(#myGradient)" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
			<svg class="hero-outline" viewBox="0 0 650 875">
				<path fill="none" stroke="#ffffff" stroke-width="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
		</div>
		<div class="welcome">
			<h1>hi, i'm christa</h1>
			<p>i'm a front-end engineer and user experience advocate.</p>
			<p>more simply, i like to <strong>make the web a better place</strong>.</p>
		</div>
	</div>
</template>

<script>
	import Stars from 'src/assets/images/Stars.vue';

	export default {
		components: {
			Stars
		}
	};
</script>


<style lang="scss">
	.hero {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;

		&-stars {
			position: relative;
			max-height: 90vh;
			height: 100%;
			max-width: 100%;
			z-index: 2;

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
			height: 100%;
			width: 100%;
			transform: scale(1.2);
			transform-origin: right;
		}
	}

	.welcome {
		position: absolute;
		height: 100%;
		display: flex;
		justify-content: center;
		flex-direction: column;

		strong {
			font-weight: 900;
		}
	}


	@keyframes text-fade-in {
		from {
			right: 0;
		}
		to {
			opacity: 1;
			right: 25%;
		}
	}
</style>
