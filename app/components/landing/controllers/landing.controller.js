'use strict';

const AUTH = new WeakMap();

export default class LandingController {
	
	constructor($scope, $timeout, systemConfig, localStorageService, AuthService) {
		this.$scope 			= $scope;
		this.$scope.input = {};

		AUTH.set(this, AuthService);

    this.thisObj = {
      value: "Using this"
    };

		$timeout(function() {
			let vph = $(window).height();
			$('.image-bg').height(vph);
			$('#third.image-bg').height(vph); // 205 is footer's height
		},10);

	}

	login() {
		let credentials = this.$scope.input;
		AUTH.get(this).authenticateUser(credentials.email, credentials.password).then(() => {

		});
	}

}
