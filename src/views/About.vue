<template>
	<div class="about-content">
		<header class="about-content-header">
			<h1 class="gradient-text">Who is Christa Weaver?</h1>
			<h2 class>Priestess of software, Goddess of code.</h2>
		</header>

		<p>
			My passion for web development started around the age of 11 with
			Invisionfree forums and learning what CSS was and how to create different
			skins. Then the discovery of MySpace happened, and it was all downhill
			from there (well, maybe not downhill, since my obsession eventually landed
			me into a career).
		</p>
		<p>
			I am a front-end engineer located in the Columbia, South Carolina metro
			area
			<svg viewBox="0 0 19 16" class="sc" role="img" labelledby="palmTitle"><title id="palmTitle">Palm tree to resemble South Carolina</title><use xlink:href="../assets/images/south-carolina.svg#south-carolina" /></svg> (but my roots are from Michigan
			<svg viewBox="0 0 16 15" class="mi" role="img" labelledby="mittenTitle"><title id="mittenTitle">Winter mitten depicting the shape of Michigan</title><use xlink:href="../assets/images/michigan.svg#michigan" /></svg> ). I have extensive experience with
			sematic HTML, SCSS, and vanilla JavaScript (ES6+). My current pathway is
			aligned with JavaScript development, with a current focus in VueJs. Vue
			test utils and Jest are also in my JavaScript arsenal, ya know, to make
			sure everything is working smoothly.
		</p>
		<p>
			By daylight, I click away at my rainbow backlight mechanical keyboard. In
			my spare time, I am a reader of sci-fi and mystery books, an enjoyer of
			psychological thrillers, and have a newfound enjoyment with playing
			Dungeons &amp; Dragons.
		</p>
		<span>¯\(ツ)/¯ and (╯°□°）╯︵ ┻━┻ are my two natural states</span>
	</div>
</template>

<script>
export default {
	name: 'About'
};
</script>

<style lang="scss">
.about-content {
	&-header {
		margin-bottom: 2rem;

		.gradient-text {
			font-size: 4rem;
			text-transform: uppercase;
			background: linear-gradient(to right, $skyblue 0%, $purple 100%);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			margin: 0;
		}

		h2 {
			font-size: 2rem;
			font-style: italic;
			font-weight: 300;
			margin-top: -13px;
			letter-spacing: 5px;
			margin-left: 10px;
		}
	}

	svg {
		width: 25px;

		&.sc {
			fill: $mint;
			color: $mint;
		}

		&.mi {
			fill: $skyblue;
			color: $skyblue;
		}
	}
}
</style>
