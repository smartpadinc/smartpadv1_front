'use strict';

const AUTH = new WeakMap();

export default class LandingController {

	constructor($scope, $rootScope, $timeout, systemConfig, localStorageService, AuthService) {
		this.$rootScope   = $rootScope;
		this.$scope 			= $scope;
		this.$scope.input = {};

		this.store = localStorageService;

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

	logout() {
		this.$rootScope.globals.user = null;
		let token = this.store.get('smrtpd_access_token');

		AUTH.get(this).revokeSession(token).then(data => {
			console.log("[Debug] Logout returned data", data);

			// Clear session
			this.store.remove('smrtpd_access_token');

		});
	}

	test() {
		return 1;
	}

}
