'use strict';

class RequestInterceptor {
	
	constructor($q, $injector, localStorageService) {
		this.$q = $q;
  	this.$injector = $injector;

		this.authorization = {};

		// Get exisiting access_token
		let access_token = localStorageService.get('smrtpd_access_token');
		if(!_.isEmpty(access_token)) {
			// If there's existing access_token, add it to header config
			this.authorization = {
				'Authorization': 'Bearer ' + access_token
			};
		}

		return {
			request: this.request.bind(this),
			requestError: this.requestError.bind(this),
			response: this.response.bind(this),
			responseError: this.responseError.bind(this)
		};
	}

	request(config) {
		let headers = {};
		if(config.method === "GET") {
			headers = {'Accept':'application/json'};
		} else if(config.method === "POST") {
			headers = {'Content-Type'	: 'application/x-www-form-urlencoded'};
		}
		config.headers = _.merge({}, headers, this.authorization);

		return config;
	}

	requestError(err) {
		return this.$q.reject(err);
	}

	response(res) {
		return res;
	}

	responseError(err) {
		return this.$q.reject(err);
	}
}

RequestInterceptor.$inject = ['$q','$injector','localStorageService'];

export default RequestInterceptor;
