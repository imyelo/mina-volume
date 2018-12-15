const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: resolve('dist'),
    filename: 'main.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'fs': 'memfs',
      'Volume': resolve('../volume'),
    },
  },
  plugins: [
    new CopyWebpackPlugin([
      resolve('../volume/static'),
      resolve('public'),
    ]),
  ],
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 8000,
  },
  mode: 'development',
}
