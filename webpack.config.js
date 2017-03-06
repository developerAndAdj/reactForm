const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;

module.exports = {
    entry: {
        index: './src/app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot-loader', 'jsx-loader', 'babel-loader']
            },
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader:'css-loader!postcss-loader'})
			},
            {
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({fallbackLoader: 'style-loader', loader:'css-loader!sass-loader'})
			},
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            inject: 'body'
        }),
        new ExtractTextPlugin({
			filename: 'assets/styles/[name].bundle.css',
			allChunks: true 
		})
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
}