var path = require('path');
var DIST_DIR = path.resolve(__dirname, 'client/dist');
var SRC_DIR = path.resolve(__dirname, 'client/components');

module.exports = {
  entry: `${SRC_DIR}/routes.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      { 
        test: /\.css$/, 
        loader: ['style-loader', 'css-loader'] 
      }
    ]
  }
};