<template>
	<div class="git-projects">
		<div class="grid-container">
			<div v-for="repo in repoData" :key="repo.index" class="git-projects__repos">
				<h3>{{ repo.name }}</h3>
				<span class="git-projects__repos-updated">Last updated: {{ repo.lastUpdated }}</span>
				<p>{{ repo.description }}</p>
				<ul class="technologies-list no-list no-spacing">
					<li v-if="repo.language">{{ repo.language }}</li>
					<li>
						<a
							:href="repo.html_url"
							target="_blank"
							:title="`View ${repo.name} repository on Github`"
						>View Repo</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>

const getGitRepos = () => {
	const api = 'https://api.github.com/users/cweave/repos';
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
			repoData: []
		};
	},
	mounted() {
		getGitRepos().then(result => {
			// show active repos from the last 90 days
			const days = 90;
			const currentDate = new Date(Date.now()).toISOString().slice(0, 10);
			const maxDateTime = new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

			result
				.filter(event => event.updated_at.slice(0, 10) >= maxDateTime && event.updated_at.slice(0, 10) <= currentDate)
				.map(i => {
					const { name, html_url, description, language, updated_at } = i;

					const date = updated_at.slice(0, 10);
					const dateObj = new Date(date + 'T00:00:00');
					const formattedDate = new Intl.DateTimeFormat('en-US').format(dateObj);

					return this.repoData.push({
						name,
						html_url,
						description,
						language,
						lastUpdated: formattedDate
					});
				});
		});
	}
};
</script>


<style lang="scss" scoped>
$minWidth: 275px;
$maxWidth: 1fr;

.git-projects {
	margin-bottom: 4em;

	.grid-container {
		grid-template-columns: repeat(auto-fit, minmax($minWidth, $maxWidth));
		@media screen and (max-width: 320px) {
			grid-template-columns: repeat(auto-fill, minmax(100%, $maxWidth));
		}

		> * {
			background-color: rgba($white, 0.1);
			border: 1px solid $black;
			box-shadow: 0 1px 5px rgba($white, 0.12);
		}
	}

	&__repos {
		text-shadow: 0 1px 1px lighten($black, 20%);
		position: relative;

		h3 {
			color: $mint;
			margin: 0;
		}

		p {
			font-weight: 300;
		}

		&-updated {
			font-size: 0.75em;
			font-style: italic;
			font-weight: 300;
		}

		.technologies-list {
			position: absolute;
			bottom: 0;
			padding-bottom: 1em;
			margin-top: 0.5em;
		}
	}
}
</style>