<template>
	<div class="content">
		<EntryCard />
	</div>
</template>

<script>
	import blogEntries from '@/static/articles.json';
	import EntryCard from '@/components/EntryCard.vue';

	export default {
		name: 'Blog',
		components: {
			EntryCard
		},
		computed: {
			entries() {
				return blogEntries;
			}
		}
	};
</script>
