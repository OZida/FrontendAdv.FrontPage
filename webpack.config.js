const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname,'src','index.js')
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname,'build')
	},
	watch: true,
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
				{
					loader: 'css-loader'
				}
			]
		},
		{
			test: /\.scss$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'sass-loader'}
			]
		}
		]
	},	
	plugins: [
		new HtmlWebpackPlugin({template:'./static/index.template.html'})
	]
}