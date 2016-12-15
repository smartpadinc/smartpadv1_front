'use strict';

class LoginDirective {
  constructor() {
    this.template = require('templates/common/test.pug');
    this.restrict = 'E';

    this.controller = LoginDirectiveController;
    this.controllerAs = 'login';
    //this.bindToController = true;
  }

  link(scope, element, attrs, ctr) {

  }

  static directiveFactory() {
    return new LoginDirective();
  }

}

class LoginDirectiveController {
  constructor() {

  }

  sampleFunction() {
    alert(1);
  }
}

export default LoginDirective.directiveFactory;
