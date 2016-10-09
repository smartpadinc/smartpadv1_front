(function () {
   'use strict';
}());

export default class LandingController {
	/* @ngInject */
	constructor($scope){
    $scope.scopeObj = {
      value : "Using webpack dev server. Test 123"
    };

    this.thisObj = {
      value: "Using this"
    };
	}

  helloWord() {
    console.log("Hello World 123");
  }

}
