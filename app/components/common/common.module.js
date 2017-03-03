"use strict";
import angular from 'npm/angular';
import LoginDirective from './directives/login.directive';
import AuthService from './services/auth.service';
import RequestInterceptor from './services/request.interceptor.service';

/*
AuthService.$inject  = ['$http'];
*/
export default angular
	.module('app.common', [])
	.service('AuthService', AuthService)
	.service('RequestInterceptor', RequestInterceptor)
	.directive('uiLogin', LoginDirective)
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('RequestInterceptor');
		console.log('[Debug] adding interceptors', $httpProvider.interceptors);
	});
