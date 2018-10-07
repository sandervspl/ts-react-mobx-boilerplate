import * as path from 'path';
import * as nodeExternals from 'webpack-node-externals';

const serverConfig = {
  name: 'server',
  mode: 'production',
  entry: {
    server: path.resolve(__dirname, '..', 'src/server/index.ts'),
  },
  target: 'node',
  node: {
    __dirname: true,
  },
  externals: [nodeExternals({ whitelist: /\.(?!js(\?|$))([^.]+(\?|$))/ })],
};

module.exports = serverConfig;
