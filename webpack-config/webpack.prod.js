"use strict";

const path              = require('path');
const webpack           = require('webpack');
const cleanPlugin       = require('clean-webpack-plugin');
const ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash    = require('webpack-md5-hash');

const basePath = function(dest) {
  return path.resolve(__dirname, '../' + dest);
};

const cssBuildInfo = require(basePath('build/build-manifest.json'));

// define Webpack configuration object to be exported
let config = {
    cache: true,
    debug: false,
    devtool: "source-map",
    entry: {
      app: [
        basePath('app/app.module.js'),
      ]
    },
    output: {
        path: basePath('dist'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map'
    },
    resolve: {
        alias: {
          'base'        : basePath(''),
          'npm'         : basePath('node_modules'),
          'assets'      : basePath('assets'),
          'build'       : basePath('build'),
          'templates'   : basePath('app/templates'),
          'components'  : basePath('app/components'),
        },
    },
    module: {
        loaders: [
            { include: basePath('config.json'), loader: 'json', },
            { include: /\.pug/, loader: 'pug-html-loader', },
            {
                test: /\.js?$/,
                include: basePath('app'),
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
        new cleanPlugin(['dist'], {
          root: basePath(''),
        }),
        new ngAnnotatePlugin({
          add: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        }),
        new HtmlWebpackPlugin({
          filename: basePath('index.html'),
          template: basePath('app/templates/index.prod.html'),
          buildManifest: cssBuildInfo,
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
          }
        }),
        new WebpackMd5Hash(),
    ]
};

module.exports = config;
