<template>
	<div class="projects-content">
		<h1>Projects</h1>
		<p>
			Welcome to my Github activity. These are my activity repositories in the last 90 days. I figured this would be a quick way to show some work as well as a fun way to show working with an API
			<span
				role="img"
				aria-label="winking emoji"
			>😉</span>
		</p>
		<git-updates />

		<h2>Web Projects</h2>
		<p>
			These are my projects alive and living on the web. By alive and living, I mainly mean they've been deployed to a server of some sort and I've actually purchased a domain for them (
			<em>or they're piggy-backing as a subdomain *cough-cough*</em>).
		</p>
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