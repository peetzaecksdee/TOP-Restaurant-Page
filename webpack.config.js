const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: path.resolve(__dirname, 'dist'),
  },
}