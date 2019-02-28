'use strict'
const path = require('path')
const merge = require('webpack-merge')
const config = require('../config')
const baseWebpackConfig = require('./webpack.base.conf.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


function resolve(dir) {
	return path.resolve(__dirname, '..', dir);
}


module.exports = merge(baseWebpackConfig, {
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicPath: '../'
                }
            },
            "css-loader"
            ]
        }]
    }
})


