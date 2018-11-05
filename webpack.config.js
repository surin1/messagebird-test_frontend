const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    js: ['babel-polyfill', './src/index.js'],
    vendor: ['react']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/, 
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[folder]__[local]-[hash:base64:5]'
          }
        }, {
          loader: 'less-loader'
        }]
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
}
