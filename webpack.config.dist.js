const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
  ],
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      include: path.resolve('./src'),
      options: {
        failOnWarning: true,
        failOnError: true,
        emitWarning: true,
      },
    }, {
      use: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      'node_modules',
      path.resolve('demo'),
    ],
  },
  externals: {
    "react": "react",
    "react-dom": "ReactDOM",
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'kakao-login.js',
    libraryTarget: 'umd',
    library: 'KakaoLogin',
  },
};

