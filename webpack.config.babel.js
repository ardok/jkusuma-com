import es6promise from 'es6-promise';
es6promise.polyfill();

import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import path from 'path';
import webpack from 'webpack';

const distPath = path.resolve(__dirname, 'dist');
const mainCssPath = path.resolve(__dirname, 'src', 'client', 'stylesheets', 'main.scss');
const mainJsPath = path.resolve(__dirname, 'src', 'client', 'javascripts', 'main.js');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const testPath = path.resolve(__dirname, 'src', 'test');

const publicPath = '/dist/';

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map';
  }
  return false;
}

export default {
  entry: [
    mainJsPath,
    mainCssPath,
  ],
  devServer: {
    publicPath,
    port: 8080,
    watchContentBase: true,
  },
  output: {
    path: distPath,
    publicPath,
    filename: 'scripts/main.js',
  },
  devtool: getDevTool(),
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        nodeModulesPath,
        testPath,
      ],
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react'],
        plugins: ['transform-es2015-destructuring', 'transform-object-rest-spread'],
      },
    }, {
      test: /\.scss$/,
      exclude: [nodeModulesPath],
      use: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader',
        }, {
          loader: 'postcss-loader',
        }, {
          loader: 'sass-loader',
        }],
        publicPath,
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    modules: ['node_modules', 'src'],
    alias: {
      'material-colors': path.resolve(__dirname, 'node_modules/material-colors/dist/colors.scss'),
    },
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'styles/main.css',
      allChunks: true,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true,
      options: {
        postcss: {
          plugins: () => [autoprefixer],
        },
      },
    }),
  ],
};
