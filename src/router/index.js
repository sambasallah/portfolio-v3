import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import StyleGuide from '@/views/StyleGuide.vue';

Vue.use(Router);


export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects
		},
		{
			path: '/style-guide',
			name: 'style-guide',
			component: StyleGuide
		}
	]
});
