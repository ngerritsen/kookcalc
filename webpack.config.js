const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { version } = require('./package.json')

const env = process.env.NODE_ENV
const config = {
  entry: {
    app: './src/main.js',
    vendor: [
      'inferno',
      'inferno-redux',
      'redux'
    ]
  },
  output: {
    public: '.',
    path: '.',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kookcalc',
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/favicon.png',
      manifest: '/manifest.json',
      inject: true,
      hash: true,
      cache: false,
      version
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(env)
      }
    })
  ]
}

if (env === 'development') {
  config.devtool = 'source-map'
}

if (env === 'production') {
  config.plugins = [...config.plugins, new webpack.optimize.UglifyJsPlugin()]
}

module.exports = config
