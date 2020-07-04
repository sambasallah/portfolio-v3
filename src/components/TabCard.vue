<template>
	<div class="card">
		<header class="card-header">
			<ul class="tab-heads">
				<li
					class="tab-head"
					v-for="tab in jobTabs"
					:key="tab"
					v-bind:class="{
						'tab-head--active': activeTab === tab
					}"
					v-on:click="switchTab(tab);"
				>
					<slot :name="tabHeadSlotName(tab)">
						{{ tab }}
					</slot>
				</li>
			</ul>
		</header>
		<main class="card-body">
			<div class="tab-panel">
				<slot :name="tabPanelSlotName"></slot>
			</div>
		</main>
	</div>
</template>

<script>
	export default {
		props: {
			initialTab: String,
			jobTabs: Array
		},
		data() {
			return {
				activeTab: this.initialTab
			};
		},
		computed: {
			tabPanelSlotName() {
				return `tab-panel-${this.activeTab}`;
			}
		},
		methods: {
			tabHeadSlotName(tabName) {
				return `tab-head-${tabName}`;
			},

			switchTab(tabName) {
				this.activeTab = tabName;
			}
		}
	};
</script>

<style lang="scss">
	.card-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		overflow-x: auto;
	}

	.tab-heads {
		display: flex;
		margin: 0;
		padding: 0;
		list-style: none;
		border-bottom: 1px solid $medium-slate;
	}

	.tab-head {
		padding: 0.5em 1.15em;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		cursor: pointer;
		transition: 0.2s all ease-in;

		&:hover,
		&--active {
			@include mint-gradient-background;
			background-size: 100%;
		}
	}

	.tab-body {
		padding: 0 1em;
	}
</style>
