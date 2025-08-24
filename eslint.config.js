const { defineConfig } = require('eslint/config');

const react = require('eslint-plugin-react');
const prettier = require('eslint-plugin-prettier');
const simpleImportSort = require('eslint-plugin-simple-import-sort');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = defineConfig([
  {
    extends: compat.extends(
      'next/core-web-vitals',
      'plugin:prettier/recommended'
    ),

    plugins: {
      react,
      prettier,
      'simple-import-sort': simpleImportSort,
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },

    rules: {
      'prettier/prettier': ['error'],
      'react/display-name': 0,
      quotes: ['error', 'single'],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreUrls: true,
        },
      ],

      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  }, // Specific TSX/JSX config
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      indent: 'off', // disable indent in TSX/JSX
    },
  },
]);
