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
                test: /\.jsx?/,
                include: SRC_DIR,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};