'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.evn')

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"'
})