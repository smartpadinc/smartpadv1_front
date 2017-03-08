'use strict';

const HTTP = new WeakMap();

export default class AuthService {
	/* @ngInject */
	constructor($http, $rootScope, localStorageService) {
		this.jQuery 		= window.$;
		this.sysConfig 	= $rootScope.globals.systemConfig;
		this.store 			= localStorageService;
		HTTP.set(this, $http);
	}

	authenticateUser(email, pass) {
		let params = {
			username: email,
			password: pass,
		};

		let post = $.param(params);
		return HTTP.get(this).post(this.sysConfig.apiServer + 'api/auth/login', post).then(result =>  result.data );
	}

	revokeSession(token) {
		return HTTP.get(this).post(this.sysConfig.apiServer + 'api/auth/logout',{},{
			headers: {'Authorization' : 'Bearer ' + token}
		}).then(result =>  result.data );
	}
}
