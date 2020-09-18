<template>
	<div class="projects-content">
		<h1>Projects</h1>
		<git-updates />

		<h2>Web Projects</h2>
		<project-card />
	</div>
</template>

<script>
import GitUpdates from '@/components/GitUpdates.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { projects } from '@/static/projects.json';

export default {
	name: 'Projects',
	components: {
		GitUpdates,
		ProjectCard
	},
	computed: {
		webProjects() {
			return projects;
		}
	}
};
</script>