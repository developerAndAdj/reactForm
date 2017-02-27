const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		home: './src/app/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\jsx?$/,
				exclude: /node_modules/,
				loader: ['react-hot-loader', 'jsx-loader', 'babel-loader']
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('css-loader!sass-loader')
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: 'body'
		}),
		new ExtractTextPlugin({
			filename: 'dist/styles/[name].bundle.css',
			allChunks: true 
		})
	],
	devtool: "source-map"
}