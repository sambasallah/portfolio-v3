<template>
	<div class="project-container">
		<div v-for="project in webProjects" :key="project.index">
			<h3 v-html="project.name"></h3>

			<a
				v-if="project.url"
				:href="project.url"
				target="_blank"
				class="project-link"
				:title="`Visit ${project.name}`"
			>
				<div class="overlay">
					<img
						:src="require(`../assets/images/projects/${project.imagePreview}`)"
						class="project-image"
						:alt="`${project.name} photo preview`"
						width="500"
						height="245"
					/>
					<svg v-if="project.url" viewBox="0 0 16 15" class="mi" role="img" labelledby="external">
						<title id="external">External website icon - box with arrow coming out of it</title>
						<use xlink:href="../assets/svgs/external-link.svg#external-link" />
					</svg>
				</div>
			</a>

			<img
				v-else
				:src="require(`../assets/images/projects/${project.imagePreview}`)"
				class="project-image"
				:alt="`${project.name} photo preview`"
				width="500"
				height="245"
			/>

			<ul class="technologies-list no-list no-spacing">
				<li v-for="tech in project.technology" v-html="tech" :key="tech.index"></li>
			</ul>
			<p v-html="project.description"></p>
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
		grid-gap: .75em;
		grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));

		@media screen and (max-width: 450px) {
			grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
		}

		> * {
			padding: 1em;
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

		.overlay {
			position: relative;
			margin-bottom: 1em;

			&:hover svg {
				opacity: 1;
			}
		}

		svg {
			color: rgba($purple, 0.6);
			transition: all 0.3s ease;
			opacity: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	&-image {
		width: 100%;
		max-width: 500px;
		border-radius: 0.5em;
		box-shadow: 0 0 10px 2px rgba($white, 0.2);
	}

	&-link {
		background-image: none;
	}
}
</style>