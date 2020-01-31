const paths = require('./paths');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base');

module.exports = merge(baseConf, {
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: paths.dist,
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
});
