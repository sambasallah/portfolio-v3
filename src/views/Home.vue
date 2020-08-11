<template>
	<div class="home">
		<div class="hero">
			<svg class="hero-stars" viewBox="0 0 665 861">
				<stars />
				<path
					fill="url(#stars)"
					stroke="#DBDBDB"
					stroke-width="2"
					d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"
				/>
			</svg>
			<svg class="hero-stars__background" viewBox="0 0 665 861">
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
			<svg class="hero-outline" viewBox="0 0 650 875">
				<path
					fill="none"
					stroke="#DBDBDB"
					stroke-width="2"
					d="M6 -1.00002L665 -1.00006L665 861C665 861 195.93 718.511 245.775 487.68C295.619 256.85 212.917 235.324 84.8721 149.674C-30.0745 72.7857 6 -1.00002 6 -1.00002Z"
				/>
			</svg>
		</div>
		<section class="welcome">
			<div class="welcome-content">
				<h1>hi, i'm christa.</h1>
				<p>I'm a front-end engineer and user experience advocate.</p>
				<p>
					More simply, I like to
					<strong>make the web a better place</strong>.
				</p>
			</div>
		</section>
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
	min-height: calc(100vh - 55px);
}

.hero {
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

.welcome {
	position: absolute;
	height: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: baseline;
	z-index: 5;
	transition: all 0.3s ease;
	margin: 0;

	@media (max-width: $bp5) {
		&-content {
			display: flex;
			align-items: center;
			flex-direction: column;
			background-color: rgba($black, 0.7);
			border-radius: 1em;
			padding: 1em;
			transition: all 0.3s ease;
		}
	}

	@media (min-width: $bp5) {
		margin-left: 150px;
	}

	@media (max-width: $bp5) {
		align-items: center;
		width: 100%;
	}

	h1 {
		font-size: 6em;
		animation: fade-in 0.2s ease-in;
	}

	p {
		margin: 0;
		width: 80%;
		margin-bottom: 5px;
		animation: fade-in 0.5s ease-in;
	}

	strong {
		font-weight: 900;
	}
}
</style>
