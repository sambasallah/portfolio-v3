<template>
	<div id="app" >
		<navbar />
		<transition name="slide" mode="out-in">
			<div class="content-container">
				<router-view />
			</div>
		</transition>
		<button
			style="margin-left: 500px"
			type="button"
			class="btn"
			:class="{ 'active' : isContactDrawerOpen }"
			@click.prevent="openContact"
		>
			Contact
		</button>
		<contact />
	</div>
</template>

<script>
	/* eslint-disable import/extensions */
	/* eslint-disable import/no-unresolved */
	import { store, mutations } from 'src/store.js';
	import Contact from '@/views/Contact.vue';
	import Navbar from '@/components/navigation/Navbar.vue';

	export default {
		components: {
			Contact,
			Navbar
		},
		computed: {
			isContactDrawerOpen() {
				return store.isContactOpen;
			}
		},
		methods: {
			openContact() {
				mutations.toggleContact();
			}
		}
	};
</script>

<style lang="scss">
	//@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,350,400,400i,700,700i');
	@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,700&display=swap');

	#app {
		height: 100%;
	}

	.content-container {
		margin-left: 200px;
	}

</style>
