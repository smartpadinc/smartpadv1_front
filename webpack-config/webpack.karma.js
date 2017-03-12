'use strict';

const path = require('path');

const basePath = function(dest) {
  return path.resolve(__dirname, "../"+dest);
};

let config = {
  cache: true,
  devtool: 'inline-source-map',
  entry: {
    main: [
      './app/app.module.js',
    ]
  },
  output: {
      path: './dist',
      filename: '[name].bundle.js',
  },
  resolve: {
      alias: {
        'base'        : basePath(''),
        'app'         : basePath('app'),
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
        { include: basePath('config.json'), loader: 'json', },
        { include: /\.pug/, loader: 'pug-html-loader', },
        {
            test: /\.js?$/,
            loader: 'babel',
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
};

module.exports = config;
