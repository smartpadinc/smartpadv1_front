'use strict';


//http://www.bradoncode.com/blog/2015/05/27/ngmock-fundamentals-angularjs-testing-inject/

import angular from 'angular';

//import LandingController from '../components/landing/landing.module';
//import LandingController from '../components/landing/controllers/landing.controller';

import app from '../app.module';
import AuthService from '../components/common/services/auth.service';

let service, http, scope, rootScope;
describe('Calculator', () => {
  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function(_$rootScope_, _$http_) {
    rootScope = _$rootScope_;
    http     = _$http_;
  }));

  //beforeEach(angular.mock.inject())

  beforeEach(() => {
    service = new AuthService(http, rootScope);
  });


  it('should add two numbers', () => {

     expect(service.testCall()).toBe("ASDDS");
  });
});
