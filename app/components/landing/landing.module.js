"use strict";

import LandingController from './controllers/landing.controller';
import angular from 'npm/angular';

export default angular
	.module('app.landing', [])
	.controller('LandingController', LandingController);
