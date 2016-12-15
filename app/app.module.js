'use strict';

import config from 'base/config.json';

import angular from 'npm/angular';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';
import uiBootstrap from 'npm/angular-ui-bootstrap';
import ngResource from 'npm/angular-resource';
import LocalStorageModule from 'npm/angular-local-storage';

import $ from 'npm/jquery';
import jQuery from 'npm/jquery';

import AppConfig from './app.config';
import CommonModule from 'components/common/common.module';
import LandingModule from 'components/landing/landing.module';

window.$ = $;
window.jQuery = jQuery;

console.log(config.globals.isMaintenance);

if(config.globals.isMaintenance === true) {

}

angular
  .module('app', [
    ngAria,
    ngResource,
    uiRouter,
    uiBootstrap,
    LocalStorageModule,
    CommonModule.name,
    LandingModule.name
  ])
  .constant('systemConfig', config)
  .config(AppConfig.initUiRouter)
  .config(AppConfig.initLocalStorageConfig);
  //.config(AppConfig.initAuthRequestInterceptor);
