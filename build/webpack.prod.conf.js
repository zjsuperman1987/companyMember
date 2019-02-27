'use strict'
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf.js')
const merge = require('webpack-merge')
const config = require('../config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

 module.exports =  merge(baseWebpackConfig, {});