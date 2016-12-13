'use strict';

export default class RequestInterceptor {
	/* @ngInject */
	constructor($q, $injector) {
		this.$q = $q;
  	this.$injector = $injector;

		return {
			request: this.request.bind(this),
			requestError: this.requestError.bind(this),
			response: this.response.bind(this),
			responseError: this.responseError.bind(this)
		};
	}

	request(config) {
		console.log("intereptor config",config);

		if(config.method === "GET") {
			config.headers = {
				'Accept': 				'application/json ',
				'authorization' : 'Bearer fj40GT1fNwe32CoiCydNOgTovLQi8F'
			};

		} else if(config.method === "POST") {
			config.headers = {
				'Content-Type'	: 'application/x-www-form-urlencoded',
			};
		}

		console.log("interceptor config", config);
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
