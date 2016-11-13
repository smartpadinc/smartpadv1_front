"use strict";

export default class AppConfig {
  /* @ngInject */
  static initUiRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/home");
     $stateProvider
      .state('/home', {
       url: "/",
       views: {
         "main": {
           controller: 'LandingController',
           controllerAs: 'home',
           template: require('templates/landing/home.pug')
         }
       },
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
}
