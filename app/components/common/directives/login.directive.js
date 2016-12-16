'use strict';

class LoginDirective {
  constructor($uibModal) {
    this.$uibModal  = $uibModal;
    //this.template   = require('templates/common/test.pug');
    this.restrict   = 'A';

    this.controller = LoginDirectiveController;
    this.controllerAs = 'login';
  }

  link(scope, element, attrs, ctr) {

  }

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
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      template: require('templates/common/login/login.modal.pug'),
      size: 'md',
    });

	}
}

LoginDirectiveController.$inject = ['$uibModal'];

export default LoginDirective.directiveFactory;
