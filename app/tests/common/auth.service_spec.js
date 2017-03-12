'use strict';


//http://www.bradoncode.com/blog/2015/05/27/ngmock-fundamentals-angularjs-testing-inject/

import angular from 'angular';

import app from 'app/app.module';
import AuthService from 'components/common/services/auth.service';

let service, http, rootScope, store;
describe('Calculator', () => {
  beforeEach(angular.mock.module('app'));

  beforeEach(angular.mock.inject(function(_$rootScope_, _$http_, _localStorageService_) {
    rootScope = _$rootScope_;
    http      = _$http_;
    store     = _localStorageService_;
  }));

  beforeEach(() => {
    service = new AuthService(http, rootScope);
  });


  it('should add two numbers', () => {  
     expect(service.testCall()).toBe("ASDDS");
  });
});
