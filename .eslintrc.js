module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true
	},
	extends: ['plugin:vue/essential', '@vue/airbnb', 'prettier/vue', 'eslint:recommended'],
	rules: {
		'no-tabs': 0, // override AirBNB rule
		'no-console': 'off',
		indent: [
			'error',
			'tab',
			{
				SwitchCase: 1
			}
		],
		'no-mixed-spaces-and-tabs': 'error',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'never'],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'brace-style': [
			'error',
			'stroustrup',
			{
				allowSingleLine: true
			}
		],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'prefer-const': 'error',
		'max-len': 'off',
		'no-param-reassign': 'off',
		'object-curly-newline': [
			'error',
			{
				consistent: true,
				multiline: true
			}
		],
		'lines-between-class-members': [
			'error',
			'always',
			{
				exceptAfterSingleLine: true
			}
		]
	},
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 7,
		sourceType: 'module',
		allowImportExportEverywhere: true
	},
	overrides: [
		{
			files: ['*.vue'],
			rules: {
				indent: 'off',
				'vue/script-indent': [
					'error',
					'tab',
					{
						baseIndent: 0
					}
				],
				'vue/html-indent': [
					'error',
					'tab',
					{
						baseIndent: 1
					}
				],
				'vue/html-closing-bracket-newline': [
					'error',
					{
						multiline: 'always'
					}
				],
				'vue/max-attributes-per-line': 'off',
				'vue/singleline-html-element-content-newline': 'off',
				'vue/html-self-closing': 'off',
				'vue/prop-name-casing': 'off'
			}
		},
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true
			}
		}
	]
};
