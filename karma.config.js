'use strict';

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        files: [
            './node_modules/jquery/dist/jquery.min.js',
            './node_modules/angular/angular.min.js',
            './node_modules/angular-aria/angular-aria.min.js',
            './node_modules/angular-ui-router/release/angular-ui-router.min.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-resource/angular-resource.min.js',
            './node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
            './node_modules/angular-local-storage/dist/angular-local-storage.min.js',
            './node_modules/babel-polyfill/dist/polyfill.js',
            './node_modules/angular-mocks/angular-mocks.js',
            { pattern: 'test-context.js', watched: false },
        ],
        frameworks: ['jasmine'],
        preprocessors: {
            'test-context.js': ['webpack']
        },
        //logLevel: config.LOG_DEBUG,
        webpack: require('./webpack-config/webpack.karma'),
        webpackServer: {
            noInfo: true
        }
    });
};
