"use strict";

import angular from 'npm/angular';
import ngAria from 'npm/angular-aria';
import uiRouter from 'npm/angular-ui-router';

import {default as AppConfig} from './app.config';
import {default as LandingModule} from './landing/landing.module';


import style from 'assets/style.scss';
import style2 from 'assets/style2.scss';

angular
  .module('app', [
    ngAria,
    uiRouter,

    LandingModule.name
  ])

  .config(AppConfig.initUiRouter);
