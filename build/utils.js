'use strict'
const path = require('path')
const glob = require('glob')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')


function resolve(dir) {
	return path.join(__dirname, '..', dir);
} 
exports.getMultiEntries = function (globPath) {
	var entries = {},
		basename, 
		pathname,
		tmp; 

	glob.sync(globPath).forEach(entry =>{
		basename = path.basename(entry, path.extname(entry));
		tmp = (entry.split('/')).splice(entry.split('/').indexOf('src') + 1);
		
		pathname = (tmp.splice(0,tmp.length - 1)).join('/');
		entries[pathname] = entry;
	})
	return entries;
}
		
exports.generateMultiHtml = function () {
	var pages = exports.getMultiEntries(resolve('src/**/*.html')),
		htmls = [];

	Object.keys(pages).forEach(n => {
		var conf = {
			template: pages[n],
			filename: n + '/' + n + '.html',
			chunks: ['manifest', 'vendor', n]
		}
		htmls.push(new HtmlWebpackPlugin(conf));
	})
	return {
		plugins: htmls
	}
}