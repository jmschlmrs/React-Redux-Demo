var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: { hot: true },
    entry: "./public/scripts/app.jsx",
    output: {
        path: './public/scripts/',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};
