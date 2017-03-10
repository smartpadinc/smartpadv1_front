'use strict';

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            { pattern: 'test-context.js', watched: false }
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        webpack: require('./webpack-config/webpack.karma'),
        webpackServer: {
            noInfo: true
        }
    });
};
