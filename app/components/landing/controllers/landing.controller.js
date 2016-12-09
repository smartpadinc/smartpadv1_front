'use strict';

export default class LandingController {
	/* @ngInject */
	constructor($scope, $timeout, systemConfig, localStorageService){
    this.thisObj = {
      value: "Using this"
    };

		$timeout(function() {
			let vph = $(window).height();
			$('.image-bg').height(vph);
			$('#third.image-bg').height(vph); // 205 is footer's height
		},10);

		if(localStorageService.isSupported) {
	    //...
			//alert("supported");
	  }
	}

}
