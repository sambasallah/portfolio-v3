<template>
	<div>
		<h1>Resume</h1>
		<p>
			Frontend developer with a dedication for providing the best possible experience to end users. Proven
			record for taking the initiative and learning new technologies and languages. Committed to learning
			and sharing knowledge with team members and moving towards a common goal of success.
		</p>
		<div v-for="job in experience" :key="job.index" class="position">
			<div class="title">
				<h2>{{ job.position }}</h2>
				<h3>{{ job.company }}</h3>
			</div>
			<ul class="technologies-list no-list no-spacing">
				<li v-for="tech in job.technology" :key="tech.index">{{ tech }}</li>
			</ul>

			<p>{{ job.description }}</p>
			<ul class="task-list no-list">
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
	padding: 0 0 1em 1em;
	margin-bottom: 1em;
	border-left-width: 2px;
	border-right-width: 0;
	border-style: solid;
	border-image: linear-gradient(to bottom, $skyblue, rgba(0, 0, 0, 0)) 1 100%;
}

.title {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	margin-bottom: 1em;

	h2 {
		margin: 0;

		&:after {
			content: '\2014';
		}
	}

	h3 {
		margin-left: 0;
		font-style: italic;
	}
}
.technologies-list {
	display: inline-flex;
	flex-wrap: wrap;

	li {
		font-size: 12px;
		border: 1px solid $mint;
		border-radius: 4px;
		padding: 2px 10px;
		background-color: rgba($light-slate, 0.4);
		color: $body-text;
		margin-bottom: 5px;

		&:not(:last-of-type) {
			margin-right: 5px;
		}
	}
}

.task-list {
	li {

		&:before {
			content: '';
			display: inline-block;
			height: 1em;
			width: 1em;
			background-image: url('../assets/svgs/terminal.svg');
			background-size: contain;
			background-repeat: no-repeat;
			margin-right: 0.75em;
		}
	}
}
</style>