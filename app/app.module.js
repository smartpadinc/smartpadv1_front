'use strict';

import config from 'base/config.json';

import angular from 'npm/angular';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';

import ngResource from 'npm/angular-resource';
import LocalStorageModule from 'npm/angular-local-storage';

import AppConfig from './app.config';
import CommonModule from 'components/common/common.module';
import LandingModule from 'components/landing/landing.module';
import uiBootstrap from 'npm/angular-ui-bootstrap';
//import timepicker from 'npm/angular-ui-bootstrap/src/timepicker/index-nocss';


//- Turn off debugging
if(!config.debug) {
  console.log = function() {};
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
  .config(AppConfig.initLocalStorageConfig)
  .run(AppConfig.initGlobalScope);
