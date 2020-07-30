<template>
	<div class="projects-content">
		<h1>Projects</h1>
		<git-updates />
	</div>
</template>

<script>
import GitUpdates from '@/components/GitUpdates.vue';

export default {
	name: 'Projects',
	components: {
		GitUpdates
	}
};
</script>
