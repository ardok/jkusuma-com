require('es6-promise').polyfill();
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');

var distPath = path.resolve(__dirname, 'dist');
var mainCssPath = path.resolve(__dirname, 'src', 'client', 'stylesheets', 'main.scss');
var mainJsPath = path.resolve(__dirname, 'src', 'client', 'javascripts', 'main.js');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');

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
      loader: ExtractTextPlugin.extract('style-loader', ['css-loader', 'postcss-loader', 'sass-loader'])
    }]
  },
  postcss: function postcss() {
    return [autoprefixer];
  },
  resolve: {
    extensions: ['', '.js', '.json', '.css', '.scss', '.html'],
    modules: ['node_modules', 'src'],
    alias: {
      'material-colors': path.resolve(__dirname, 'node_modules/material-colors/dist/colors.scss')
    }
  },
  plugins: [
    new ExtractTextPlugin('/styles/main.css', {
      allChunks: true
    })
  ]
};
