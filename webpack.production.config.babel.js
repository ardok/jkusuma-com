import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';

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
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin()],
  },
});
