<template>
	<div>
		<h1>Style Guide</h1>
		<div class="style-guide__grid-container grid-container">
			<div class="headings">
				<h1>Heading One</h1>
				<h2>Heading Two</h2>
				<h3>Heading Three</h3>
				<h4>Heading Four</h4>
				<h5>Heading Five</h5>
				<h6>Heading Six</h6>
			</div>

			<div class="buttons">
				<button class="btn btn--primary">Primary Button</button>
				<button class="btn btn--secondary">Secondary Button</button>

				<div class="button-group">
					<button class="btn btn--primary">Button Group Primary</button>
					<button class="btn btn--secondary">Button Group Secondary</button>
				</div>
			</div>

			<div class="colors">
				<ul class="brand-colors">
					<li v-for="color in colors" :key="color.id">
						<div class="brand-colors__square" :style="{ backgroundColor: color.hex }"></div>
						{{ color.name }}&mdash; {{ color.hex.toUpperCase() }}
					</li>
				</ul>
			</div>

			<div class="item">
				<p>
					Be careful, or I will spill the beans on your placeholder text. I think the only difference between me and the
					other placeholder text is that I’m more honest and my words are more beautiful. You know, it really doesn’t
					matter what you write as long as you’ve got a young, and beautiful, piece of text. I'm speaking with myself,
					number one, because I have a very good brain and I've said a lot of things.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StyleGuide',
	data() {
		return {
			colors: [
				{
					name: 'black',
					hex: '#3C3D31'
				},
				{
					name: 'slate',
					hex: '#8892B0'
				},
				{
					name: 'medium-slate',
					hex: '#A8B2D1'
				},
				{
					name: 'light-slate',
					hex: '#CCD6F6'
				},
				{
					name: 'white',
					hex: '#F5F5F5'
				},
				{
					name: 'mint',
					hex: '#84FAB0'
				},
				{
					name: 'skyblue',
					hex: '#8FD3F4'
				},
				{
					name: 'purple',
					hex: '#383d95'
				}
			]
		};
	}
};
</script>

<style lang="scss" scoped>
.style-guide {
	&__grid-container {
		color: $black;

		& > div:nth-child(1) {
			grid-area: headings;
		}
		& > div:nth-child(2) {
			grid-area: buttons;
		}
		& > div:nth-child(3) {
			grid-area: colors;
		}
		& > div:nth-child(4) {
			grid-area: item;
		}

		& {
			grid-template-areas:
				'headings'
				'buttons'
				'colors'
				'item';

			@media screen and (min-width: 625px) {
				grid-template-areas:
					'headings	buttons'
					'colors	item';
			}

			@media screen and (min-width: 950px) {
				grid-template-areas:
					'headings	buttons	colors'
					'item	item	item';
			}

			.item-buttons {
				> button + button {
					display: block;
					margin-top: 1em;
				}
			}
		}
	}
}

.brand-colors {
	list-style: none;
	margin: 0;
	padding: 0;

	&__square {
		width: 20px;
		height: 20px;
		margin: 5px;
		border: 1px solid rgba(0, 0, 0, 0.2);
	}

	li {
		display: flex;
		align-items: center;
	}
}
</style>
