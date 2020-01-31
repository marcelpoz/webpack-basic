const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // The file in which we import all the business logic of our app
  // By default, you are restricted to Javascript
  // But because Webpack is magical, you can import any kind of file as long as you tell Webpack what to do with it
  // Multiple entries are also possible, in case you want to build multiple bundles (ex: server and client bundle)
  entry: `${paths.src}/entry.js`,
  // Settings for where to leave the resulting output
  // Needs to be an object, even if you only declare its path like here
  output: {
    path: paths.dist,
  },
  // Where you define what Webpack should do with modules you import
  module: {
    // An array of objects containing rules to apply to modules
    rules: [
      {
        // The value to test modules against. If true, the module will be bundled accordingly
        test: /\.js$/,
        // A loader is a standardised plugin which can be used to preprocess files
        // In this case we use 'babel-loader' to transpile modern Javascript into CommonJS
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        // You can use pipe multiple loaders by declaring them in an array
        // NB: The last loader defined will be the first loader Webpack uses for preprocessing
        // sass-loader compiles sass into css
        // css-loader transpiles css into Javascript
        // style-loader creates a function that injects a style node with your styles into the DOM
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // Additional plugins that Webpack can run, independent from code bundling
  plugins: [
    // HtmlWebpackPlugin is a simple plugin that simply injects your bundled files into an HTML file you
    // It's ideal for setups where you just need a simple index.html file that launches an SPA (think of our Angular.js projects)
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: `${paths.dist}/index.html`,
      inject: true,
    }),
  ],
};
