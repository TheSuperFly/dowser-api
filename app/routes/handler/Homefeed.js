"use strict";

const Homefeed = require('../../lib/HomefeedLib');

var homefeed = {};

homefeed.pathRoot = function( request, reply ) {
  reply("Welcome to /homefeed directory");
};

homefeed.pathGet = function ( request, reply ) {
  
};

module.exports = homefeed;