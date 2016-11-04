"use strict";

export default class LandingController {
	/* @ngInject */
	constructor($scope){
    $scope.scopeObj = {
      value : "Using webpack dev server."
    };
    console.log("reload");
    this.thisObj = {
      value: "Using this"
    };

		$('#jq').html('test');
	}

  helloWord() {
    console.log("Hello World 1234");
  }



}
