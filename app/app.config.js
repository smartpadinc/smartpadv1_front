"use strict";

export default class AppConfig {
  /* @ngInject */
  static initUiRouter($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
     $stateProvider
      .state('/home', {
       url: "/home",
       views: {
         "main": {
           controller: 'LandingController',
           controllerAs: 'home',
           template: require('templates/landing/test.pug')
         }
       },
    });

  }

}
