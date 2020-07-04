<template>
	<div class="blog-entries__section">
		<!-- <h2 class="blog-entries__section-title">{{ section }}</h2> -->
		<div v-for="(section, index) in Object.keys(entries).reverse(section)" :key="index">
			<div class="blog-entries__entry-card" v-for="entry in entries[section]" :key="entry.id">
				<div class="blog-entries__entry-information">
					<span class="blog-entries__entry-date">
						<time>{{ entry.date }}</time>
					</span>
					<h3 class="blog-entries__entry-title">
						<a @click="$router.push({ name: entry.id })" :title="entry.title">
							{{ entry.title }}
						</a>
					</h3>
					<ul>
						<li v-for="(tag, index) in entry.tags" :key="index">
							{{ tag }}
						</li>
					</ul>
					<p class="blog-entries__entry-description">
						{{ entry.description }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import blogEntries from '@/static/articles.json';

	export default {
		name: 'EntryCard',
		data() {
			return {
				section: ''
			};
		},
		computed: {
			entries() {
				return blogEntries;
			}
		}
	};
</script>

<style lang="scss" scoped>
	.blog-entries {

		&__entry {

			&-card {
				padding: 2em;
				border-radius: .5rem;
				box-shadow: 0 5px 20px rgba($black, 0.12);
				background-color: $white;
				margin-bottom: 1em;
			}

			&-title {
				font-size: 1.75em;
				margin-top: 0;
				margin-bottom: 0;
				text-shadow: 0 1px 2px rgba($black, 0.20);
			}

			&-date {
				font-size: 0.75em;
				color: #777;
				letter-spacing: 0.5px;
			}

			&-information {

				ul {
					list-style-type: none;
					margin: 0;
					padding: 0;
				}

				li {
					display: inline-flex;
					align-items: center;
					font-size: 0.75em;

					&:before {
						content: '';
						display: inline-block;
						background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20data-prefix%3D%22fas%22%20data-icon%3D%22hashtag%22%20class%3D%22svg-inline--fa%20fa-hashtag%20fa-w-14%22%20role%3D%22img%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20448%20512%22%3E%0D%0A%20%20%20%20%3Cdefs%3E%0D%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22myGradient%22%20gradientTransform%3D%22rotate%28120%29%22%3E%0D%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20%20stop-color%3D%22%2384FAB0%22%20/%3E%0D%0A%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%238FD3F4%22%20/%3E%0D%0A%20%20%20%20%20%20%20%20%3C/linearGradient%3E%0D%0A%20%20%20%20%3C/defs%3E%0D%0A%20%20%20%20%3Cpath%20fill%3D%22url%28%27%23myGradient%27%29%22%20d%3D%22M440.667%20182.109l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l14.623-81.891C377.123%2038.754%20371.468%2032%20363.997%2032h-40.632a12%2012%200%200%200-11.813%209.891L296.175%20128H197.54l14.623-81.891C213.477%2038.754%20207.822%2032%20200.35%2032h-40.632a12%2012%200%200%200-11.813%209.891L132.528%20128H53.432a12%2012%200%200%200-11.813%209.891l-7.143%2040C33.163%20185.246%2038.818%20192%2046.289%20192h74.81L98.242%20320H19.146a12%2012%200%200%200-11.813%209.891l-7.143%2040C-1.123%20377.246%204.532%20384%2012.003%20384h74.81L72.19%20465.891C70.877%20473.246%2076.532%20480%2084.003%20480h40.632a12%2012%200%200%200%2011.813-9.891L151.826%20384h98.634l-14.623%2081.891C234.523%20473.246%20240.178%20480%20247.65%20480h40.632a12%2012%200%200%200%2011.813-9.891L315.472%20384h79.096a12%2012%200%200%200%2011.813-9.891l7.143-40c1.313-7.355-4.342-14.109-11.813-14.109h-74.81l22.857-128h79.096a12%2012%200%200%200%2011.813-9.891zM261.889%20320h-98.634l22.857-128h98.634l-22.857%20128z%22%3E%0D%0A%20%20%20%20%3C/path%3E%3C/svg%3E');
						background-repeat: no-repeat;
						height: 1em;
						width: 1em;
					}

					&:not(:first-child):not(:last-child) {
						margin-left: 0.75em;
						margin-right: 0.75em;
					}
				}
			}
		}
	}
</style>
