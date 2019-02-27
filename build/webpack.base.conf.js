'use strict'
const path = require('path')
const config = require('../config')

const utils = require('./utils')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const entries = utils.getMultiEntries(resolve('src/**/*.js'))
const generateHtml = utils.generateMultiHtml();
const ENV = process.env.NODE_ENV

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}



module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: entries,
	output: {
		 path: config.build.rootPath,
		 filename: '[name]/[name].js',
		 publicPath: ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		 chunkFilename: '[name]/[name].chunk.js'
	},
	plugins: generateHtml.plugins
}