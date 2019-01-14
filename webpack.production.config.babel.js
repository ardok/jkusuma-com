import webpack from 'webpack';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

import webpackDefaultConfig from './webpack.config.babel';

export default Object.assign({}, webpackDefaultConfig, {
  plugins: webpackDefaultConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ]),
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
});
