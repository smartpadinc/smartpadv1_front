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
           //template: require('templates/landing/home.pug')
           template: require('templates/landing/coming-home.pug')
         }
       },
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
}
