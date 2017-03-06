"use strict";
const path              = require('path');
const webpack           = require('webpack');
const cleanPlugin       = require('clean-webpack-plugin');
const ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const basePath = function(dest) {
  console.log(path.resolve(__dirname, '../' + dest));
  return path.resolve(__dirname, '../' + dest);
};

// define Webpack configuration object to be exported
let config = {
    cache: true,
    devtool: "eval",
    entry: {
      //vendor: ['libs/supersized-shutter'],
      app: [
        'webpack/hot/dev-server',
        basePath('app/app.module.js'),
      ]

    },
    output: {
        path: basePath('dist'),
        publicPath: '/dist/',
        filename: "[name].bundle.js",
        //chunkFilename: "vendor.bundle1.js"
    },
    resolve: {
        alias: {
          'base'        : basePath(''),
          'libs'        : basePath('libs'),
          'assets'      : basePath('assets'),
          'build'       : basePath('build'),
          'npm'         : basePath('node_modules'),
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
                exclude: [
                  basePath('node_modules'),
                  basePath('libs'),
                ],
                loader: 'jshint'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          filename: basePath('index.html'),
          template: basePath('app/templates/index.dev.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new cleanPlugin(['dist'], {
          root: basePath(''),
        }),
        new ngAnnotatePlugin({
          add: true
        }),
        //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity)
    ]
};

// todo
// https://github.com/webpack/docs/wiki/build-performance/99b3c2758589c35d62c3cdc03e312682de31dd6b
// https://webpack.github.io/docs/build-performance.html
// http://cheng.logdown.com/posts/2016/03/25/679045
// https://www.jonathan-petitcolas.com/2016/01/23/webpack-html-plugin-in-a-nutshell.html
// https://github.com/kitconcept/webpack-starter-angular
// https://webpack.github.io/docs/code-splitting.html

module.exports = config;
