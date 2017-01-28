import webpack from 'webpack';
import objectAssign from 'object-assign';

import webpackDefaultConfig from './webpack.config.babel';

export default objectAssign({}, webpackDefaultConfig, {
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
