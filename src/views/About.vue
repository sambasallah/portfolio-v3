<template>
	<div>
		<h1 class="gradient-text">Priestess of software, goddess of code.</h1>
		<p>My passion for web development started around the age of 11 with Invisionfree forums and learning what CSS was and how to create different skins. Then the discovery of MySpace happened, and it was all downhill from there (well, maybe not downhill, since my obsession eventually landed me into a career).</p>
		<p>Currently, I am a front-end engineer at Cognito Forms located in Columbia, South Carolina (but my roots are from Michigan). I have extensive experience with sematic HTML, SCSS, and vanilla JavaScript (ES6+). My current pathway is aligned with JavaScript development, with a current focus in VueJs. Vue test utils and Jest are also in my JavaScript arsenal, ya know, to make sure everything is working smoothly.</p>
		<p>By daylight, I click away at my rainbow backlight mechanical keyboard. In my spare time, I am a reader of sci-fi and mystery books, an enjoyer of psychological thrillers, and have a newfound enjoyment with playing Dungeons &amp; Dragons.</p>
		<span>¯\(ツ)/¯ and (╯°□°）╯︵ ┻━┻ are my two natural states</span>
	</div>
</template>

<script>
	export default {
		name: 'About'
	};
</script>

<style lang="scss">
	.gradient-text {
		font-size: 4rem;
		line-height: 0.9;
		text-transform: uppercase;
		background: linear-gradient(to right, $skyblue 0%, #1b2947 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin: 0;
	}
</style>
