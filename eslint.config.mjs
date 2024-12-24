import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	{
		rules: {
			'no-console': 'warn',
			semi: 'error',
			'no-debugger': 'warn',
			quotes: ['warn', 'single'],
			'no-unused-vars': 'warn',
			'no-undef': 'off',
		},
	},
];
