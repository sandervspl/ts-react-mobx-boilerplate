import * as webpack from 'webpack';
import * as path from 'path';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { merge } from './base';
import globals from '../src/config/globals';

const devConfig: any = merge({
  name: 'client',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true&noInfo=true',
      path.join(__dirname, '..', 'src/index.tsx'),
    ],
  },
  devServer: {
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
    port: 3000,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals('client')),
  ],
});

module.exports = devConfig;
