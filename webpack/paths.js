const path = require('path');

// Define resolvers for src and dist directories
module.exports = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
};
