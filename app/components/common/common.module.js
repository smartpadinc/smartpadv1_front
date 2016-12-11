"use strict";

import {default as AuthService} from './services/auth.service';
import {default as RequestInterceptor} from './services/request.interceptor.service';
import angular from 'npm/angular';

/*
AuthService.$inject  = ['$http'];
*/

export default angular
	.module('app.common', [])
	.service('AuthService', AuthService)
	.service('RequestInterceptor', RequestInterceptor)
	.config(function($httpProvider) {
		$httpProvider.interceptors.push('RequestInterceptor');
		console.log('adding interceptors', $httpProvider.interceptors);
	});
