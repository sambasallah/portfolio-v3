<template>
	<div class="projects-content">
		<h1>Projects</h1>
		<div>
			<ul>
				<li v-for="event in gitEvents" :key="event.index">{{ event.type }} {{ event.repo }}</li>
			</ul>
		</div>
	</div>
</template>

<script>
const getGitEvents = () => {
	const api = 'https://api.github.com/users/cweave/events';
	return fetch(api).then((response) => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	});
};
export default {
	name: 'Projects',
	data() {
		return {
			gitEvents: []
		};
	},
	mounted() {
		getGitEvents().then((result) => {
			result.forEach((event) => {
				if (event.type !== 'WatchEvent' && event.type !== 'IssueCommentEvent') {
					this.gitEvents.push({
						type: event.type,
						repo: event.repo
					});
				}
			});
		});
	}
};
</script>
