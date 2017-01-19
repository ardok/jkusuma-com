require('es6-promise').polyfill();
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var distPath = path.resolve(__dirname, 'dist');
var mainJsPath = path.resolve(__dirname, 'src', 'client', 'javascripts', 'main.js');
var mainCssPath = path.resolve(__dirname, 'src', 'client', 'stylesheets', 'main.scss');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map';
    }
    return false;
}

module.exports = {
  entry: [
    mainJsPath,
    mainCssPath
  ],
  devServer: {
    contentBase: __dirname
  },
  output: {
    path: distPath,
    publicPath: '/dist',
    filename: '/scripts/main.js'
  },
  devtool: getDevTool(),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: [nodeModulesPath],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      exclude: [nodeModulesPath],
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('/styles/main.css', {
      allChunks: true
    })
  ]
};
