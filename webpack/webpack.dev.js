const paths = require('./paths');
const merge = require('webpack-merge');
const baseConf = require('./webpack.base');

// We here use the webpack-merge package to extend webpack.base.js and add some additional settings for local development
module.exports = merge(baseConf, {
  // This injects source maps into your bundles. Handy for debugging
  devtool: 'inline-source-map',
  // webpack-dev-server settings (only use this if webpack bundles the entire codebase of your app, i.e. doesn't just provide assets to another app like Drupal)
  devServer: {
    // Add fallback for history API for browsers which don't support them
    historyApiFallback: true,
    // The base directory where your app should launch from (usually your dist folder)
    contentBase: paths.dist,
    // Whether to automatically open a tab on intial run or not
    open: true,
    // Whether to compress files or not (gzip)
    compress: true,
    // Enable/disable hot module replacement
    hot: true,
    // Which port to serve the app on
    port: 3000,
  },
});
