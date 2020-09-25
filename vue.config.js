const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

function resolveRealPath(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	lintOnSave: true,
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
					@import "@/styles/_variables.scss";
					@import "@/styles/_buttons.scss";
					@import "@/styles/_default.scss";
					@import "@/styles/_grid.scss";
					@import "@/styles/_mixins.scss";
					@import "@/styles/_utilities.scss";
					@import "@/styles/_animations.scss";
        		`
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				src: path.resolve(__dirname, 'src')
			},
			extensions: ['.vue', '.js', '.scss']
		},

		plugins: [
			new PrerenderSpaPlugin(
				// Absolute path to compiled SPA
				path.resolve(__dirname, 'dist'),
				// List of routes to prerender
				['/', '/about', '/projects', '/resume']
			)
		]
	},
	chainWebpack: config => {
		config.module
			.rule('md')
			.test(/\.md/)
			.use('vue-loader')
			.loader('vue-loader')
			.end()
			.use('vue-markdown-loader')
			.loader('vue-markdown-loader/lib/markdown-compiler')
			.options({
				raw: true
			});
		config.resolve.alias
			.set('vue$', 'vue/dist/vue.esm.js')
			.set('@views', resolveRealPath('src/views'))
			.set('@assets', resolveRealPath('src/assets'))
			.set('@router', resolveRealPath('src/router'))
			.set('@components', resolveRealPath('src/components'));
		config.resolve.extensions.clear().add('js');
	}
};
