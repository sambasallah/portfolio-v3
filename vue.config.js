const path = require('path');

function resolveRealPath(dir) {
	return path.join(__dirname, dir);
}

module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	lintOnSave: true,
	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "~@/styles/styles.sass"'
			},
			scss: {
				prependData: '@import "~@/styles/styles.scss";'
			}
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				src: path.resolve(__dirname, 'src')
			},
			extensions: ['.vue', '.js', '.scss']
		}
	},
	chainWebpack: (config) => {
		config.module.rule('md')
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
		config.resolve.extensions
			.clear()
			.add('js');
	}
};
