'use strict'
const path = require('path')
const config = require('../config')

const utils = require('./utils')
const entries = utils.getMultiEntries(resolve('src/**/**.js'))
const htmls = utils.getMultiHtml('src/**/**.html')
const ENV = process.env.NODE_ENV

function resolve(dir) {
	return path.join(__dirname, '..', dir);
} 

module.exports = {
	entry: entries,
	output: {
		path: config.build.rootPath,
		publicPath: ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		filename: '[name]/[name].js',
		chunkFilename: 'js/[name].chunk.js'
	},
	plugins: htmls.plugins
}