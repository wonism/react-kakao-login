'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    inline: true,
    port: 8888,
    historyApiFallback: true,
    compress: false,
  },
  entry: {
    demo: [
      'webpack/hot/dev-server',
      './demo/index.js'
    ],
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js',
    publicPath: '/'
  },
};

