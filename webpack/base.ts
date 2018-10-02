import * as path from 'path';
import * as webpackMerge from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const srcPath = (p: string) => path.resolve(__dirname, '..', 'src/', p);

const baseConfig: any = {
  mode: 'production',
  devtool: 'cheap-source-map',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'initial',
        },
      },
      // Files will invalidate i. e. when more chunks with the same vendors are added.
      // medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
      name: false,
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        }],
      },
      {
        test: /\.svg$/,
        oneOf: [
          {
            resource: /external/,
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
          {
            loader: ['babel-loader', { loader: 'svg-react-loader' }],
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        oneOf: [
          {
            resource: /external/,
            loader: 'file-loader',
            query: { name: 'static/[name].[ext]' },
          },
          {
            loader: 'url-loader',
            query: {
              limit: 10000,
              name: 'static/[name].[ext]',
            },
          },
        ],
      },
      {
        exclude: [
          /\.js$/,
          /\.tsx?$/,
          /\.css$/,
          /\.svg$/,
          /\.(jpe?g|png|gif)$/i,
          /\.json$/,
          /\.html/,
        ],
        loader: 'file-loader',
        query: { name: 'static/[name].[ext]' },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.ts', '.tsx'],
    alias: {
      app: srcPath('app'),
      common: srcPath('app/components/common'),
      components: srcPath('app/components'),
      config: srcPath('config'),
      fonts: srcPath('app/static/fonts'),
      images: srcPath('app/static/images'),
      modules: srcPath('app/components/modules'),
      server: srcPath('server'),
      services: srcPath('app/services'),
      stores: srcPath('app/stores'),
      styles: srcPath('app/styles'),
      vectors: srcPath('app/static/vectors'),
      'styled-components': srcPath('app/services/styled-components.ts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Typescript Boilerplate',
      filename: 'index.html',
      inject: true,
      template: path.resolve(__dirname, '..', 'src/index.html'),
    }),
  ],
};

export default baseConfig;

export const merge = (...config) => webpackMerge(baseConfig, ...config);
