'use strict';

var context = require.context('./app', true, /_spec\.js$/);
context.keys().forEach(context);
