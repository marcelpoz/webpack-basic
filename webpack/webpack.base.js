const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${paths.src}/entry.js`,
  output: {
    path: paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: `${paths.dist}/index.html`,
      inject: true,
    }),
  ],
};
