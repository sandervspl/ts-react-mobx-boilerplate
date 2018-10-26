const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const workbox = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
import * as webpack from 'webpack';
import globals from './globals';
import { merge } from './base';
import config from './config';

const prodConfig: webpack.Configuration = merge({
  name: 'client',
  mode: 'production',
  entry: {
    app: [
      '@babel/polyfill',
      path.join(__dirname, '../src/index.tsx'),
    ],
  },
  plugins: [
    new webpack.DefinePlugin(globals('client')),
    new WebpackPwaManifest({
      name: config.appName,
      short_name: config.shortName,
      orientation: 'portrait',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#FFFFFF',
      start_url: '/',
      scope: '/',
      ios: true,
      // icons: [{
      //   src: path.resolve(__dirname, '../src/app/static/images/icon.png'),
      //   sizes: [96, 128, 192, 256, 512],
      //   destination: path.join('icons'),
      //   ios: true,
      // }],
    }),
    new workbox.GenerateSW({
      cacheId: 'ts-react-mobx-boilerplate',
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],
});

const serverConfig: webpack.Configuration = {
  name: 'server',
  mode: 'production',
  target: 'node',
  node: {
    __dirname: true,
  },
  entry: {
    server: path.resolve(__dirname, '../src/server/index.ts'),
  },
  externals: [
    nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ }),
  ],
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    plugins: [
      new TsconfigPathsPlugin(),
    ],
  },
  plugins: [
    new webpack.DefinePlugin(globals('server')),
  ],
};

module.exports = [prodConfig, serverConfig];
