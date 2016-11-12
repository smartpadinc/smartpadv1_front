"use strict";
const path              = require('path');
const webpack           = require('webpack');
const cleanPlugin       = require('clean-webpack-plugin');
const ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');

const basePath = function(dest) {
  return path.resolve(__dirname, '../' + dest);
};

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
        publicPath: '/dist/',
        filename: 'bundle.js'
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
            /*{ test: /\.scss$/, loaders: ["style", "css", "sass"] }, */
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
    ]
};

module.exports = config;
