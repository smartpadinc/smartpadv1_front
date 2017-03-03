"use strict";

export default class AppConfig {
  /* @ngInject */
  static initUiRouter($stateProvider, $urlRouterProvider,$qProvider, $locationProvider, systemConfig) {
    console.log("[Debug] new system config", systemConfig);
    console.log("[Debug] Setting up ui router");

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

    $qProvider.errorOnUnhandledRejections(false);
  }

  static initLocalStorageConfig(localStorageServiceProvider) {
    console.log("[Debug] Setting default prefix for localStorageServiceProvider");
    localStorageServiceProvider
      .setPrefix('smrtpd')
      .setStorageType('localStorage')
      .setDefaultToCookie(false)
      .setStorageCookie(1,'/', true);
  }

  static initAuthRequestInterceptor($httpProvider) {
    console.log('[Debug] $log is here tos how you logs', $httpProvider.interceptors);
  }
}
