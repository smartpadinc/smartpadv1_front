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
		config.headers = {
			'Accept': 				'application/json',
			'authorization' : 'Bearer fj40GT1fNwe32CoiCydNOgTovLQi8F'
		};
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
