const path = require('path')
const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '.',
    compress: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            minified: true,
          }
        },
        {
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint/lib/formatters/stylish')
          }
        }]
      },
    ]
  }
}
