"use strict";

export default class AppConfig {
  /* @ngInject */
  static initUiRouter($stateProvider, $urlRouterProvider, $locationProvider, systemConfig) {
    console.log("new system config", systemConfig);
    console.log("Setting up ui router");

    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('/', {
       url: "/",
       views: {
         "main": {
           controller: 'LandingController',
           controllerAs: 'home',
           template: (systemConfig.globals.isMaintenance ? require('templates/landing/coming-home.pug') : require('templates/landing/home.pug') )
         }
       },
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

  static initLocalStorageConfig(localStorageServiceProvider) {
    console.log("Setting default prefix for localStorageServiceProvider");
    localStorageServiceProvider.setPrefix('smrtpd');
  }

  static initAuthRequestInterceptor($httpProvider) {
    console.log('$log is here tos how you logs', $httpProvider.interceptors);
  }
}
