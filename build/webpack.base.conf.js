'use strict'
const path = require('path')
const config = require('../config')

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		main: './src/src/index.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production'
			? config.build.assetsPublicPath
			: config.dev.assetsPublicPath
	}
}