import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';
import Debug from 'debug';
import path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'development';
const debug = Debug('NDC:');
const app = new express();
const PORT = process.env.PORT || 5100;

const webpackConfig = webpack({
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, './app.js'),
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      API_HOST: "'http://api.host.com'",
    }),
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
    }],
  },
});

app.use(webpackDevMiddleware(webpackConfig, {
  noInfo: true,
  publicPath: '/',
}));
app.use(webpackHotMiddleware(webpackConfig));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    debug("NDC Dev Site Listening on port %s", PORT);
  }
});
