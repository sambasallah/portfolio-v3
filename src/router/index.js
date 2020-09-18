import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
import Resume from '@/views/Resume.vue';
import StyleGuide from '@/views/StyleGuide.vue';

Vue.use(Router);

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		displayInNav: true,
		meta: {
			title: 'Frontend Engineer | Christa Weaver - South Carolina'
		}
	},
	{
		path: '/about',
		name: 'about',
		component: About,
		displayInNav: true,
		meta: {
			title: 'About | Christa Weaver - Frontend Engineer'
		}
	},
	{
		path: '/projects',
		name: 'projects',
		component: Projects,
		displayInNav: true,
		meta: {
			title: 'Projects | Christa Weaver - Frontend Engineer'
		}
	},
	{
		path: '/resume',
		name: 'resume',
		component: Resume,
		displayInNav: false,
		meta: {
			title: 'Resume | Christa Weaver - Frontend Engineer'
		}
	},
	{
		path: '/style-guide',
		name: 'style-guide',
		component: StyleGuide,
		displayInNav: false
	}
];

const vueRouter = new Router({
	routes,
	mode: 'history',
	base: process.env.BASE_URL
});

vueRouter.beforeEach((to, from, next) => {
	to.meta.title ? (document.title = to.meta.title) : (document.title = 'Frontend Engineer | Christa Weaver');

	next();
});

export default vueRouter;
