'use strict';

class LoginDirective {
  constructor() {
    this.restrict   = 'A';
    this.controller = LoginDirectiveController;
    this.controllerAs = 'login';
  }

  link(scope, element, attrs, ctr) {}

  static directiveFactory() {
    return new LoginDirective();
  }
}

class LoginDirectiveController {
  constructor($uibModal) {
    this.$uibModal = $uibModal;
  }

  showModal() {
		var modalInstance = this.$uibModal.open({
      animation: false,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: require('templates/common/login/login.modal.pug'),
      size: 'md',
      controller: ($scope, $rootScope, AuthService, localStorageService) => {
        $scope.error = {};
        $scope.clientAuthenticate = function() {
          let input = $scope.input;

          $scope.error.invalidUserPassword = false;

          if( !_.isUndefined(input) && (!_.isEmpty(input.email) || !_.isEmpty(input.password)) ) {
            AuthService.authenticateUser(input.email, input.password).then((results) => {
              localStorageService.set('smrtpd_access_token', results.data.access_token);
              modalInstance.dismiss('cancel');

              $rootScope.globals.user = {
                'first_name' : "Test"
              };

        		}, (error) => {
              $scope.error = {
                'invalidUserPassword' : true,
                'message': 'Invalid username or password'
              };

            });
          } else { console.log("[Debug] Empty fields"); }
        };

      }
    });
	}

}

LoginDirectiveController.$inject = ['$uibModal','AuthService','localStorageService'];

export default LoginDirective.directiveFactory;
