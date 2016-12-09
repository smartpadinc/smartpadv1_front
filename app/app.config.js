"use strict";

export default class AppConfig {
  /* @ngInject */
  static initUiRouter($stateProvider, $urlRouterProvider, $locationProvider, systemConfig) {
    console.log("new system config", systemConfig);
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
}
