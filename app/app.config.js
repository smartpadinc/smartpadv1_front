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
           templateUrl: "public/partials/home/index.html"
         }
       },
    });

  }

}
