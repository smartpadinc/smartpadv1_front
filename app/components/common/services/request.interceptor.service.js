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
		// config.headers = {
		// 	'Accept': "application/json, text/plain, */*",
		// 	'Authorization': 'Bearer DCRrCx0OhJHrPvFmUF6d85wFRh20cr'
		// };
		config.headers['authorization'] = 'Bearer DCRrCx0OhJHrPvFmUF6d85wFRh20cr';
		console.log("HEADER CONFIG", config);
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
