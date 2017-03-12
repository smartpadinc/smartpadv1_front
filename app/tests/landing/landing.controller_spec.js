'use strict';


//http://www.bradoncode.com/blog/2015/05/27/ngmock-fundamentals-angularjs-testing-inject/

import angular from 'angular';

import app from 'app/app.module';

import AuthService from 'components/common/services/auth.service';
import LandingController from 'components/landing/controllers/landing.controller';

let ctrl, http, rootScope, scope, store;
describe('Calculator', () => {
  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function(_$rootScope_, _$controller_, _$http_, _localStorageService_) {
    rootScope = _$rootScope_;
    http      = _$http_;
    store     = _localStorageService_;
    scope     = _$rootScope_.$new();

    var a = _$controller_('LandingController', {
      '$scope': scope,
      '$rootScope': rootScope,
    });
    console.log(a);
  }));




  it('should add two numbers 1', () => {
     //expect(controller.test()).toBe("1");
  });

});
