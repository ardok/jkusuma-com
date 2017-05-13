import webpack from 'webpack';

import webpackDefaultConfig from './webpack.config.babel';

export default Object.assign({}, webpackDefaultConfig, {
  plugins: webpackDefaultConfig.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: true,
      },
    }),
  ]),
});
