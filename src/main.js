import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/styles.scss';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
	id: 'UA-61317148-4',
	router,
	debug: {
		sendHitTask: process.env.NODE_ENV === 'production'
	}
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
