module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'@vue/airbnb'
	],
	rules: {
		'no-tabs': 0, // override AirBNB rule
		'no-console': 'off',
		'nonblock-statement-body-position': 'off',
		curly: 'off',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-mixed-spaces-and-tabs': 'error',
		'object-curly-spacing': ['error', 'always'],
		'linebreak-style': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'standard/no-callback-literal': 'off',
		'key-spacing': ['error', { afterColon: true }],
		'comma-spacing': ['error', { after: true, before: false }],
		'comma-dangle': ['error', 'never'],
		'keyword-spacing': ['error', { before: true, after: true }],
		'no-multiple-empty-lines': 'error',
		'padded-blocks': 'error',
		'space-before-blocks': 'error',
		'space-in-parens': ['error', 'never'],
		'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
		'no-multi-spaces': 'error',
		'no-trailing-spaces': 'error',
		'prefer-const': 'error',
		'no-useless-constructor': 'off',
		'max-len': 'off',
		'no-param-reassign': 'off',
		'object-curly-newline': ['error', { consistent: true, multiline: true }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }]
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
				'vue/script-indent': ['error', 'tab', { baseIndent: 1 }],
				'vue/html-indent': ['error', 'tab', { baseIndent: 1 }],
				'vue/html-closing-bracket-newline': ['error', { multiline: 'always' }],
				'vue/max-attributes-per-line': 'off',
				'vue/singleline-html-element-content-newline': 'off',
				'vue/html-self-closing': 'off',
				'vue/prop-name-casing': 'off'
			}
		},
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)'
			],
			env: {
				jest: true
			}
		}
	]
};
