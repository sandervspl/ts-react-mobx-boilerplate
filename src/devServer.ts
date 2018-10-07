// tslint:disable no-console

// Add TypeScript support
require('ts-node/register');

// @ts-ignore
const webpack = require('webpack');
const express = require('express');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack/client-dev.ts');
const { port } = require('./config');

const app = express();
const compiler = webpack(config);

const middleware = webpackMiddleware(compiler, {
  logLevel: 'error',
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.listen(port, () => {
  console.log(`Development server listening at http://localhost:${port}/`);
});
