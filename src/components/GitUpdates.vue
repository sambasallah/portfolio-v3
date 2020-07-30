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
			console.log(result);
			let { type, payload } = result
				.filter(event => event.type !== 'WatchEvent' && event.type !== 'IssueCommentEvent')
				.filter((i, index) => index < 5)
				.reduce((accumulator, item) => {
					Object.keys(item).forEach(key => {
						console.log('key', key, 'accu', accumulator, 'item', item);
						accumulator[key] = (accumulator[key] || []).concat(item[key]);
					});
					return accumulator;
				}, {});

			this.gitEvents.push({
				type,
				payload
			});
			console.log('type', type);
			// result
			// 	.filter(event => event.type !== 'WatchEvent' && event.type !== 'IssueCommentEvent')
			// 	.filter((i, index) => index < 5)
			// 	.map((i, index) => {
			// 		return console.log(i);
			// 	});
			// result.forEach(event => {
			// 	if (this.gitEvents.length <= 5 && event.type !== 'WatchEvent' && event.type !== 'IssueCommentEvent') {
			// 		this.gitEvents.push({
			// 			type: event.type,
			// 			repo: event.repo
			// 		});
			// 	}
			// });
		});
	}
};
</script>
