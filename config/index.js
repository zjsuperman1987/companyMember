'use strict'

const path = require('path');

module.exports = {
    dev: {

        // path
        assetsPublicPath: '/',

        host: '0.0.0.0',
        port: 8080,
        autiOpenBrowser: false,
        notifyOnErrors: true,
        poll: false,

        cssSourceMap: true
    },

    build: {
        productionSourceMap: true,
        devtool: '#source-map',

        // Paths
        rootPath: path.resolve(__dirname, '../dist'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsPublicPath: '/',
        

        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],

        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    }
}