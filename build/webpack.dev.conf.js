'use strict'
const path = require('path');

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: './src/index/index.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '../', 'dist')
	}
}