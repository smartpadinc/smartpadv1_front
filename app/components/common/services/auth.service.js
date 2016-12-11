'use strict';

const HTTP = new WeakMap();

export default class AuthService {
	/* @ngInject */
	constructor($http, systemConfig) {
		this.apiServer = systemConfig.apiServer;
		HTTP.set(this, $http);
	}

	getGithubProfile() {
		console.log("system config inside auth", this.apiServer, this.apiServer + 'api/user/profile/');
		//return HTTP.get(this).get('https://api.github.com/users/naorye/repos').then(result =>  result.data );

		return HTTP.get(this).get(this.apiServer + 'api/user/profile/').then(result =>  result.data );
	}
}
