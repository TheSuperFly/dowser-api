"use strict";

var misc = {};

misc.pathRoot = function( request, reply ) {
  reply("Welcome to / directory");
};

misc.pathUp = function( request, reply ) {
  reply("OK");
};

misc.pathV = function( request, reply ) {
  reply(require('../../package.json').version);
};

module.exports = misc;