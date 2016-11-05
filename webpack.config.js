"use strict";

// import Webpack plugins
const cleanPlugin       = require('clean-webpack-plugin');
const ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');
const webpack           = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// define Webpack configuration object to be exported
let config = {
    cache: true,
    devtool: "eval",
    context: `${__dirname}/app`,
    //entry: './app.module.js',
    entry: {
      app: [
        'webpack/hot/dev-server',
        './app.module.js',
      ]
    },
    output: {
        path: `${__dirname}/dist`,
        publicPath: "/dist/",
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
          'base'        : `${__dirname}`,
          'npm'         : `${__dirname}/node_modules`,
          'assets'      : `${__dirname}/assets`,
          'build'       : `${__dirname}/build`,
          'templates'   : `${__dirname}/app/templates`,
          'components'  : `${__dirname}/app/components`,
        },
    },
    module: {
        loaders: [
            /*{
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(eot|svg|ttf)$/,
                loader: 'file'
            },
            */
            {
                include: `${__dirname}/config.json`,
                loader: 'json',
            },
            {
                //test: /\.jade$/,
                include: /\.pug/,
                loader: 'pug-html-loader',
            },
            {
                test: /\.js?$/,
                include: `${__dirname}/app`,
                loader: 'babel',
                query: {
                    cacheDirectory: true, //important for performance
                    presets: ["es2015"]
                }
            }
        ],
        preLoaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'jshint'
            }
        ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new cleanPlugin(['dist']),
      new ngAnnotatePlugin({
          add: true
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      }),
    ]
};

// todo
// https://github.com/webpack/docs/wiki/build-performance/99b3c2758589c35d62c3cdc03e312682de31dd6b
// https://webpack.github.io/docs/build-performance.html
// http://cheng.logdown.com/posts/2016/03/25/679045

module.exports = config;
