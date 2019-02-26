'use strict'
const path = require('path')
// const baseWebpackConfig = require('./webpack.base.conf.js')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		index: './src/index/index.js',
		test: './src/test/test.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name]/[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index/index.html',
			template: "./src/index/index.html"
		})
	]
}
