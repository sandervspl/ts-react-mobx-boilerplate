import * as webpack from 'webpack';
import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';
import globals from './globals';
import { merge } from './base';

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
    new webpack.DefinePlugin(globals()),
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
    server: [path.resolve(__dirname, '../src/server/index.ts')],
  },
  externals: [
    nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ }),
  ],
};

module.exports = [prodConfig, serverConfig];
