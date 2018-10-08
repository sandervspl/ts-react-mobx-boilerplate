require('@babel/polyfill');

import * as webpack from 'webpack';
import * as path from 'path';
import * as ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { merge } from './base';
import globals from './globals';
import { port } from '../src/config';

const devConfig: any = merge({
  name: 'client',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    app: path.join(__dirname, '..', 'src/index.tsx'),
  },
  devServer: {
    publicPath: '/',
    compress: true,
    historyApiFallback: true,
    hot: true,
    noInfo: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
    port,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals()),
  ],
});

module.exports = devConfig;
