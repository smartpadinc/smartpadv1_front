'use strict';

const HTTP = new WeakMap();

export default class AuthService {
	/* @ngInject */
	constructor($http, $rootScope) {
		this.jQuery 		= window.$;
		this.sysConfig 	= $rootScope.globals.systemConfig;
		HTTP.set(this, $http);
	}

	authenticateUser(email, pass) {
		let params = {
			grant_type 		: 'password',
			username 	 		: email,
			password   		: pass,
			client_id  		: this.sysConfig.client_id,
			client_secret : this.sysConfig.client_secret,
		};

		let post = $.param(params);
		return HTTP.get(this).post(this.sysConfig.apiServer + 'o/token/', post).then(result =>  result.data );
	}

}
