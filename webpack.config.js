const webpack = require('webpack');

const env = process.env.NODE_ENV;
const config = {
  devtool: 'source-maps',
  entry: './src/main.js',
  output: {
    public: '.',
    path: '.',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {
        test: /.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /.vue$/,
        loader: 'vue'
      }
    ]
  }
};

if (env === 'production') {
  delete config.devtool;
  config.plugins = [new webpack.optimize.UglifyJsPlugin()];
}

module.exports = config;
