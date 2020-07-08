import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Projects from '@/views/Projects.vue';
// import Blog from '@/views/Blog.vue';
import StyleGuide from '@/views/StyleGuide.vue';
// import BlogEntries from '../static/articles.json';

Vue.use(Router);

// const blogRoutes = Object.keys(BlogEntries).map((section) => {
// 	const children = BlogEntries[section].map(child => ({
// 		path: child.id,
// 		name: child.id,
// 		component: () => import(`../articles/${section}/${child.id}.md`)
// 	}));

// 	return {
// 		path: `/${section}`,
// 		name: section,
// 		component: () => import('../views/BlogPost.vue'),
// 		children
// 	};
// });


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
		// {
		// 	path: '/blog',
		// 	name: 'blog',
		// 	component: Blog,
		// 	children: {
		// 		...blogRoutes
		// 	}
		// },
		{
			path: '/style-guide',
			name: 'style-guide',
			component: StyleGuide
		}
	]
});
