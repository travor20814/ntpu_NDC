import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import Debug from 'debug';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const NODE_ENV = process.env.NODE_ENV || 'development';
const debug = Debug('SetWebsite:Client');
const app = new express();
const PORT = process.env.PORT || 5100;

if (NODE_ENV !== 'production') {
  const config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
      'eventsource-polyfill',
      'webpack-hot-middleware/client',
      path.join(__dirname, 'app.js'),
    ],
    output: {
      path: __dirname,
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
    ],
    module: {
      loaders: [{
        test: /\.js$/,
        loaders: [
          'react-hot',
          'babel',
        ],
        exclude: /node_modules/,
        include: __dirname,
      }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
        ],
      }, {
        test: /\.(pdf|docx?)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      }],
    }
  };

  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));
  app.use(webpackHotMiddleware(compiler));

  app.use(function(req, res) {
    res.sendFile(__dirname + '/index.html');
  });
} else {
  const routes = require('./routes.js');

  app.use((req, res) => {
    match({
      routes: routes.default,
      location: req.url
    }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message)
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      } else if (renderProps) {
        res.status(200).send(renderToString(<RouterContext {...renderProps} />))
      } else {
        res.status(404).send('Not found')
      }
    })
  });
}

app.listen(PORT, function(error) {
  if (error) {
    console.error(error)
  } else {
    debug("NDC Dev Site Listening on port %s", PORT);
  }
});
