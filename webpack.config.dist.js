'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
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
  externals: {
    "react": "react",
    "react-dom": "ReactDOM",
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'kakao-login.js',
    libraryTarget: 'umd',
    library: 'KakaoLogin',
  },
};

