var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: { hot: true },
    devtool: 'source-map',
    entry: "./public/scripts/index.js",
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    },
    output: {
        path: './public/scripts/',
        filename: 'bundle.js'
    },
    watch: true,
};
