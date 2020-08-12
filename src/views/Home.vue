<template>
	<div class="home">
		<galaxy />
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
import Galaxy from 'src/components/display/Galaxy.vue';

export default {
	components: {
		Galaxy
	}
};
</script>

<style lang="scss">
.home {
	min-height: calc(100vh - 55px);
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
		width: 100%;
		align-items: center;
	}

	h1 {
		animation: fade-in 0.2s ease-in;
		@media (min-width: $bp5) {
			font-size: 6em;
		}
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
