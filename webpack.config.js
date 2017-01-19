require('es6-promise').polyfill();
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function getDevTool() {
    if (process.env.NODE_ENV !== 'production') {
        return 'source-map';
    }
    return false;
}

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    './src/client/javascripts/main.js',
    './src/client/stylesheets/main.scss'
  ],
  devServer: {
    contentBase: __dirname
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: '/scripts/main.js'
  },
  devtool: getDevTool(),
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('/styles/main.css', {
      allChunks: true
    })
  ]
};
