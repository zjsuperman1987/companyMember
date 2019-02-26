'use strict'
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js')
const config = require('../config')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		main: './src/index/index.js',
		test: './src/test/test.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name]/[name].js',
	}
}
