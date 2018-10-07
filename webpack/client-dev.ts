// @ts-ignore
const webpack = require('webpack');
const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { merge } = require('./base');
const globals = require('./globals');

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
  // devServer: {
  //   publicPath: '/',
  //   compress: true,
  //   historyApiFallback: true,
  //   hot: true,
  //   noInfo: true,
  //   headers: { 'Access-Control-Allow-Origin': '*' },
  //   stats: { colors: true },
  //   port: 3000,
  // },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin(globals()),
  ],
});

module.exports = devConfig;
