'use strict';

const AUTH = new WeakMap();

export default class LandingController {
	/* @ngInject */
	constructor($scope, $timeout, systemConfig, localStorageService, AuthService) {
		this.$scope = $scope;
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

		// AuthService.getGithubProfile().then((value) => {
		// 	console.log("TEST",value);
		// }, (error) => {
		// 	console.log("ERROR", error);
		// });

		if(localStorageService.isSupported) {
	  }

	}


	login() {
		let credentials = this.$scope.input;
		AUTH.get(this).authenticateUser(credentials.email, credentials.password).then(() => {

		});
	}

}
