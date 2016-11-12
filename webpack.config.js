'use strict';

switch(process.env.SMRT_ENV) {
  case 'development':
    console.log("Starting webpack development server...");
    module.exports = require('./webpack-config/webpack.dev');
    break;
  case 'production':
    console.log("Building changes...");
    module.exports = require('./webpack-config/webpack.prod');
    break;
  default:
    console.log("environment not found");
}
