const webpack = require('webpack');
const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.resolve('demo'),
    hot: true,
    inline: true,
    port: 8888,
    historyApiFallback: true,
    compress: false,
  },
  entry: path.resolve('demo/index.jsx'),
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('development')
      }
    })
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.resolve('./demo'),
      options: {
        failOnWarning: true,
        failOnError: true,
        emitWarning: true,
      },
    }, {
      use: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve('demo'),
    ],
  },
  output: {
    path: path.resolve('demo'),
    filename: 'bundle.js',
    publicPath: '/',
  },
};

