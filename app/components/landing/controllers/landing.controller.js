'use strict';

export default class LandingController {
	/* @ngInject */
	constructor($scope, $timeout, globalConfig){
		console.log(globalConfig.development);
    this.thisObj = {
      value: "Using this"
    };

		var a = "MUST BE UNDEFINED";

		$timeout(function() {
			let vph = $(window).height();
			$('.image-bg').height(vph);
			$('#third.image-bg').height(vph); // 205 is footer's height

		},10);

	}

  helloWord() {
    console.log("Hello World 1234");
  }



}
