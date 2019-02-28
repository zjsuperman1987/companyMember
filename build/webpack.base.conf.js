'use strict'
const path = require('path')
const config = require('../config')
const utils = require('./utils')
const entries = utils.getMultiEntries(resolve('src/**/*.js'))
const generatHtml = utils.generateMultiHtml('src/**/*.html')
const ENV = process.env.NODE_ENV

console.log(path.resolve(__dirname, 'dist'),'---------------------------------------')

function resolve(dir) {
	return path.join(__dirname, '..', dir);
}

module.exports = {
	entry: entries,
	output: {
		 path: path.resolve(__dirname, '../dist/'),
		 filename: () => {
		 	return '[name]/[name].js'
		 } ,
		 publicPath: ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
		 chunkFilename: '[name].chunk.js'
	},
	plugins: generatHtml.plugins
}