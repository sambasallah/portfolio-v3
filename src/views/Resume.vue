<template>
	<div>
		<h1>Resume</h1>
		<div v-for="job in experience" :key="job.index">
			<div class="position">
				<h2>{{ job.position }}</h2>
				<h3>{{ job.company }}</h3>
			</div>
			<ul class="technologies-list no-list no-spacing">
				<li v-for="tech in job.technology" :key="tech.index">{{ tech }}</li>
			</ul>

			<p>{{ job.description }}</p>
			<ul>
				<li v-for="task in job.tasks" :key="task.index">{{ task }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { jobExperience } from '@/static/experience.json';

export default {
	name: 'Resume',
	data() {
		return {
			section: ''
		};
	},
	computed: {
		experience() {
			return jobExperience;
		}
	}
};
</script>

<style lang="scss">
.position {
	display: flex;
	align-items: center;

	h2 {
		margin: 0;

		&:after {
			content: '\2014';
		}
	}
}
.technologies-list {
	display: inline-flex;

	li {
		font-size: 12px;
		border: 1px solid $mint;
		border-radius: 4px;
		padding: 2px 10px;
		background-color: rgba($light-slate, 0.4);
		color: $body-text;

		&:not(:last-of-type) {
			margin-right: 5px;
		}
	}
}
</style>