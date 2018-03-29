var path = require('path');
var DIST_DIR = path.resolve(__dirname, 'client/dist');
var SRC_DIR = path.resolve(__dirname, 'client/components');

module.exports = {
    entry: `${SRC_DIR}/app.jsx`,
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
            loader: ["style-loader", "css-loader"] 
          },
          { 
            test: /\.png$/, 
            loader: "url-loader?limit=100000" 
          },
          { 
            test: /\.jpg$/, 
            loader: "file-loader" 
          },
          {
            test: /\.(woff|woff2)$/, 
            loader: 'url-loader'
          },
          {
            test: /\.ttf$/, 
            loader: 'url-loader'
          },
          {
            test: /\.eot$/, 
            loader: 'file-loader'
          },
          {
            test: /\.svg$/, 
            loader: 'url-loader'
          }
        ]
      }
};