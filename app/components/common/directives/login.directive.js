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
		this.$uibModal.open({
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: require('templates/common/login/login.modal.pug'),
      size: 'md',
      controller: ($scope, AuthService, localStorageService) => {
        $scope.error = {};

        $scope.clientAuthenticate = function() {
          let input = $scope.input;

          $scope.error.invalidUserPassword = false;

          if(!_.isEmpty(input.email) || !_.isEmpty(input.password)) {
            AuthService.authenticateUser(input.email, input.password).then((data) => {
              console.log("TEST SUCCESS!", data);
              localStorageService.set('smrtpd_access_token', data.access_token);

        		}, (error) => {
              $scope.error.invalidUserPassword = true;
            });
          } else {
            console.log("Invalid Email or Password");
          }
        };

        $scope.getGithubProfile = function() {
          AuthService.getGithubProfile().then((result) =>  {
            console.log(result);
          });
        };
      }
    });
	}

}

LoginDirectiveController.$inject = ['$uibModal','AuthService','localStorageService'];

export default LoginDirective.directiveFactory;
