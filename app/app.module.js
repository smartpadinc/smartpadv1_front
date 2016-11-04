"use strict";

import angular from 'npm/angular';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';

import $ from 'npm/jquery';
import jQuery from 'npm/jquery';

import {default as AppConfig} from './app.config';
import {default as LandingModule} from './landing/landing.module';

window.$ = $;
window.jQuery = jQuery;

angular
  .module('app', [
    ngAria,
    uiRouter,

    LandingModule.name
  ])

  .config(AppConfig.initUiRouter);
