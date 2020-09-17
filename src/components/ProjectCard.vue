<template>
	<div class="project-container">
		<div v-for="project in webProjects" :key="project.index">
			<h3 v-html="project.name"></h3>
			<a :href="project.url" class="project-link">
				<img
					:src="require(`../assets/images/projects/${project.imagePreview}`)"
					class="project-image"
					:alt="`${project.name} photo preview`"
					width="500"
					height="245"
				/>
			</a>
			<ul class="technologies-list no-list no-spacing">
				<li v-for="tech in project.technology" v-html="tech" :key="tech.index"></li>
			</ul>
			<p v-html="project.description"></p>
			<p v-if="project.url" class="project-link">
				<a :href="project.url">
					Check it out
					<svg viewBox="0 0 16 15" class="mi" role="img" labelledby="external">
						<title id="external">External website icon - box with arrow coming out of it</title>
						<use xlink:href="../assets/svgs/external-link.svg#external-link" />
					</svg>
				</a>
			</p>
		</div>
	</div>
</template>

<script>
import { projects } from '@/static/projects.json';

export default {
	name: 'ProjectCard',
	computed: {
		webProjects() {
			return projects;
		}
	}
};
</script>


<style lang="scss">
.project {
	&-container {
		display: grid;
		grid-gap: 1em;
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

		@media screen and (max-width: 450px) {
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
		}

		> * {
			padding: 2em;
		}

		.technologies-list {
			a {
				background-image: none;

				&:hover,
				&:focus,
				&:active {
					color: $mint;
				}
			}
		}
	}

	&-image {
		width: 100%;
		max-width: 500px;
		border-radius: 0.5em;
		box-shadow: 0 0 10px 2px rgba($white, 0.2);
		margin-bottom: 1em;
	}

	&-link {
		background-image: none;

		image {
			&:hover {
				background-color: gray;
			}
		}
	}

	// &-link {
	// 	display: flex;
	// 	align-items: center;

	// 	svg {
	// 		margin-left: 0.25em;
	// 		width: 15px;
	// 	}
	// }
}
</style>