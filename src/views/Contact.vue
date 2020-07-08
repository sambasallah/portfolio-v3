<template>
	<section v-if="isContactDrawerOpen" class="contact-section">
		<h1>Contact</h1>

		<div class="mountains-container"></div>
	</section>
</template>

<script>
	/* eslint-disable import/extensions */
	/* eslint-disable import/no-unresolved */
	import { store } from 'src/store.js';

	export default {
		name: 'Contact',
		computed: {
			isContactDrawerOpen() {
				return store.isContactOpen;
			}
		}
	};
</script>

<style lang="scss">
	.contact-section {
		height: 75vh;
		width: 100%;
		background-color: $slate;
		position: absolute;
		bottom: 0;
		z-index: 10;
		overflow: hidden;
	}

	.mountains-container {
		background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%231c6f92' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2329abe2' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23417592' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%2367b7e2' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%235d8095' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%238ec3e5' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23718796' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23accde3' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23848f96' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23ccdce7' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23969696' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23e0e0e0' points='943 900 1210 900 971 687'/%3E%3C/svg%3E") no-repeat center bottom;
		background-size: cover;
		height: 100%;
		position: relative;
	}
</style>
