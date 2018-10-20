import * as path from 'path';
import * as webpackMerge from 'webpack-merge';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const srcPath = (p: string) => path.resolve(__dirname, '../src/', p);

const baseConfig: any = {
  output: {
    path: path.join(__dirname, '../dist'),
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
            resourceQuery: /external/,
            loader: 'url-loader?limit=10000',
          },
          {
            loader: '@svgr/webpack',
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
          /\.jsx?$/,
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
      '@common': srcPath('app/components/common/index'),
      components: srcPath('app/components'),
      config: srcPath('config'),
      '@config': srcPath('config/index'),
      fonts: srcPath('app/static/fonts'),
      images: srcPath('app/static/images'),
      modules: srcPath('app/components/modules'),
      '@modules': srcPath('app/components/modules/index'),
      server: srcPath('server'),
      services: srcPath('app/services'),
      '@services': srcPath('app/services/index'),
      stores: srcPath('app/stores'),
      styles: srcPath('app/styles'),
      '@types': srcPath('app/types/index'),
      vectors: srcPath('app/static/vectors'),
      'styled-components': srcPath('app/services/styled-components.ts'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ts react mobx',
      filename: 'index.html',
      inject: true,
      template: path.join(__dirname, '../src/index.html'),
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
  ],
};

export default baseConfig;

export const merge = (...config) => webpackMerge(baseConfig, ...config);
