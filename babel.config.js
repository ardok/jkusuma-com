/* eslint-disable */
module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  plugins: [
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-transform-flow-strip-types',
  ],
};