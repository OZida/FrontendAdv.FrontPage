const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// var Isotope = require('isotope-layout');

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
				{loader: 'style-loader'},
				{loader: 'css-loader'}
			]
		},
		{
			test: /\.scss$/,
			use: [
				{loader: 'style-loader'},
				{loader: 'css-loader'},
				{loader: 'sass-loader'}
			]
		},
		{
			test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 8000, // Convert images < 8kb to base64 strings
                            //  name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
        },
        {
        	test: /\.(woff|woff2|eot|ttf|otf)$/,
			loader: "file-loader"
        },
        // {
        // 	test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
        // 	loader: 'imports?define=>false&this=>window'
        // }	
		]
	},	
	plugins: [
		new HtmlWebpackPlugin({template:'./static/index.template.html'}),
		new CopyWebpackPlugin([
			{ from: 'static/img/*.*'},
			// { from: 'fonts/*.*'}
		]),
		new webpack.ProvidePlugin({
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery'
		})
	]
}