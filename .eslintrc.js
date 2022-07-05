module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 0,
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'max-len': ['error', { code: 80, ignoreComments: true }],
  },
};
