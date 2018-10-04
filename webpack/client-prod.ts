import * as webpack from 'webpack';
import * as path from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as  WorkboxPlugin from 'workbox-webpack-plugin';
// import BundleAnalyzerPlugin from 'webpack-bundle-analyzer'.BundleAnalyzerPlugin;
import globals from '../src/config/globals';
import { merge } from './base';

const prodConfig: any = merge({
  name: 'client',
  mode: 'production',
  devtool: 'cheap-source-map',
  entry: {
    app: path.join(__dirname, '..', 'src/index.tsx'),
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin(globals('client')),
    new HtmlWebpackPlugin({
      title: 'React Typescript Boilerplate',
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '..', 'src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: 'sw.js',
      // publish a new service worker and have it update and control a web page
      // as soon as possible, skipping the default service worker lifecycle.
      skipWaiting: true,
      clientsClaim: true,
    }),
    // new BundleAnalyzerPlugin(),
  ],
});

module.exports = prodConfig;
