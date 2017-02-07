const webpack = require('webpack');
const path = require('path');

module.exports = {
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
};
