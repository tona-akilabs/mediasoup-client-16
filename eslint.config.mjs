// eslint.config.mjs
import eslint from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jest from 'eslint-plugin-jest';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';

export default [
	{ ignores: ['node_modules/', 'lib/', 'dist/', '**/*.d.ts'] },

	// Base JS rules
	eslint.configs.recommended,

	// TypeScript rules
	{
		files: ['src/**/*.ts'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				// project: './tsconfig.json',
				// eslint-disable-next-line no-undef
				tsconfigRootDir: process.cwd(),
			},
			globals: { ...globals.node, ...globals.browser },
		},
		plugins: {
			'@typescript-eslint': tsPlugin,
		},
		rules: {
			...tsPlugin.configs.recommended.rules,
			'no-empty': 'off',
			'no-undef': 'off',
			'no-prototype-builtins': 'off',
		},
	},

	// Jest rules for test files
	{
		files: ['src/test/**/*.ts'],
		...jest.configs['flat/recommended'],
	},

	// Prettier plugin
	prettierRecommended,
];
