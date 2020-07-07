<template>
	<div class="home">
		<!-- <div class="stars-container"></div>
		<div class="mountains-container"></div> -->
		<div class="hero__flourish">
			<svg class="hero__flourish-shape" viewBox="0 0 665 861">
				<stars />
				<path fill="url(#stars)" stroke="#FAE0E6" stroke-width="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
			<svg class="hero__flourish-shape__background" viewBox="0 0 665 861">
				<linearGradient id="myGradient" gradientTransform="rotate(90)">
					<stop offset="0%"  stop-color="#040d30" />
					<stop offset="52%" stop-color="#1b2947" />
					<stop offset="86%" stop-color="#383d95" />
					<stop offset="100%" stop-color="#383d95" />
				</linearGradient>
				<path fill="url(#myGradient)" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
			<svg class="hero__flourish-outline" viewBox="0 0 650 875">
				<path fill="none" stroke="#ffffff" stroke-width="2" d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"></path>
			</svg>
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
	.home {
		position: relative;
		height: 100vh;
	}

	.hero__flourish {
		position: absolute;
		top: 0;
		right: 0;
		height: 100vh;

		&-shape {
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

	.stars-container {
		position: absolute;
		top: 0;
		width: 100%;
		height: 100vh;
		padding: 0;
		margin: 0;
		overflow: hidden;
		background: url(../assets/images/stars.svg);
	}

	.mountains-container {
		@include mountains;
	}

	.welcome {
		width: fit-content;
		position: absolute;
		right: 0;
		top: 15%;
		left: 25%;
		opacity: 0;
		transform: translate(0, -15%);
		animation: text-fade-in 1000ms 800ms forwards;
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

	.gradient-text {
		font-size: 4rem;
		line-height: 0.9;
		text-transform: uppercase;
		background: linear-gradient(to right, $skyblue 0%, #1b2947 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 0;
	}

	.personal-information {

		&__grid-container {
			padding: 1.25em;

			& > div:nth-child(1)  { grid-area: about; }
			& > div:nth-child(2)  { grid-area: history; }

			& {
				grid-template-areas:
					"about about"
					"history history";

				@media screen and (min-width: 750px) {
					grid-template-areas:
					"about history";
				}
			}
		}
	}
</style>
