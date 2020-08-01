<template>
	<ul>
		<li v-for="event in gitEvents" :key="event.index">{{ event.type }} {{ event.repo }}</li>
	</ul>
</template>

<script>
const getGitEvents = () => {
	const api = 'https://api.github.com/users/cweave/events';
	return fetch(api).then(response => {
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return response.json();
	});
};

export default {
	name: 'GitUpdates',
	data() {
		return {
			gitEvents: []
		};
	},
	mounted() {
		getGitEvents().then(result => {
			//console.log(result);
			result
				.filter(event => event.type !== 'WatchEvent' && event.type !== 'IssueCommentEvent')
				.filter((i, index) => index < 5)
				.map((i, index) => {
					console.log(i);
					const {
						type,
						repo,
						payload
					} = i;
					return this.gitEvents.push({
						type,
						repo,
						payload
					});
				});

			console.log('type', this.gitEvents);
		});
	}
};
</script>
