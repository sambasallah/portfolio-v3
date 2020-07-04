<template>
	<div class="home">
		<div class="stars-container"></div>
		<div class="mountains-container"></div>

		<div class="welcome">
			christa weaver
		</div>


		<div class="personal-information__grid-container grid-container">
			<div class="about">
				<h2 class="gradient-text">Priestess of software, goddess of code.</h2>
				<p>My passion for web development started around the age of 11 with Invisionfree forums and learning what CSS was and how to create different skins. Then the discovery of MySpace happened, and it was all downhill from there (well, maybe not downhill, since my obsession eventually landed me into a career).</p>
				<p>Currently, I am a front-end engineer at Cognito Forms located in Columbia, South Carolina (but my roots are from Michigan). I have extensive experience with sematic HTML, SCSS, and vanilla JavaScript (ES6+). My current pathway is aligned with JavaScript development, with a current focus in VueJs. Vue test utils and Jest are also in my JavaScript arsenal, ya know, to make sure everything is working smoothly.</p>
				<p>By daylight, I click away at my rainbow backlight mechanical keyboard. In my spare time, I am a reader of sci-fi and mystery books, an enjoyer of psychological thrillers, and have a newfound enjoyment with playing Dungeons & Dragons.</p>
				<span>¯\(ツ)/¯ and (╯°□°）╯︵ ┻━┻ are my two natural states</span>
			</div>
			<div class="history">
				<JobHistory />
			</div>

		</div>
	</div>
</template>

<script>
	import JobHistory from '@/components/JobHistory.vue';

	export default {
		name: 'home',
		components: {
			JobHistory
		}
	};
</script>

<style lang="scss">
	.home {
		position: absolute;
		top: 0;
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
