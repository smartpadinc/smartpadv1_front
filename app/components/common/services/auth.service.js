'use strict';

const HTTP = new WeakMap();

export default class AuthService {
	/* @ngInject */
	constructor($http, systemConfig) {
		this.jQuery = window.$;
		this.sysConfig = systemConfig;
		this.apiServer = systemConfig.apiServer;
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

		return HTTP.get(this).post(this.apiServer + 'o/token/', post).then(result =>  result.data );
	}

	getGithubProfile() {
		console.log("system config inside auth", this.apiServer, this.apiServer + 'api/user/profile/');
		//return HTTP.get(this).get('https://api.github.com/users/naorye/repos').then(result =>  result.data );

		return HTTP.get(this).get(this.apiServer + 'api/user/profile/').then(result =>  result.data );
	}

	verifyService() {
		return "Instantiated!";
	}
}
