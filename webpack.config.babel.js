// import { polyfill as es6promise } from 'es6-promise';
import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// es6promise();

const distPath = path.resolve(__dirname, 'dist');
const mainCssPath = path.resolve(
  __dirname,
  'src',
  'client',
  'stylesheets',
  'main.scss'
);
const mainJsPath = path.resolve(
  __dirname,
  'src',
  'client',
  'javascripts',
  'main.js'
);
const nodeModulesPath = path.resolve(__dirname, 'node_modules');

const publicPath = '/dist/';

function getDevTool() {
  if (process.env.NODE_ENV !== 'production') {
    return 'source-map';
  }
  return false;
}

export default {
  entry: [mainJsPath, mainCssPath],
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
    rules: [
      {
        test: /\.js$/,
        exclude: [
          nodeModulesPath,
          `${path.resolve(__dirname, 'src')}/**/__tests__/**`,
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-flow'],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: [nodeModulesPath],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.css', '.scss', '.html'],
    modules: ['node_modules', 'src'],
    alias: {
      'material-colors': path.resolve(
        __dirname,
        'node_modules/material-colors/dist/colors.scss'
      ),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/main.css',
      chunkFilename: '[id].css',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true,
    }),
  ],
};
