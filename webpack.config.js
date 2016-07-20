var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    commonsChunk: true,
    devServer: { hot: true },
    devtool: 'source-map',
    entry: {
        main: './public/scripts/index.js',
        register: './public/scripts/register.js'
    },
    module: {
        loaders: [
            { loader: 'babel-loader', exclude: /node_modules/, },
            // { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass') }
        ]
    },
    output: {
        path: './public/scripts/bundles/',
        filename: 'bundle.[name].js'
    },
    // plugins: [
    //     new ExtractTextPlugin('bundle.style.css', {
    //         allChunks: true
    //     })
    // ],
    watch: true,
};
