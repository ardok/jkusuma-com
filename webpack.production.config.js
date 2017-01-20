var webpack = require('webpack');
var objectAssign = require('object-assign');

var webpackDefaultConfig = require('./webpack.config');

module.exports = objectAssign({}, webpackDefaultConfig, {
  plugins: webpackDefaultConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ])
});
