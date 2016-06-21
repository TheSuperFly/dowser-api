"use strict";

const HomefeedHandler = require('../handler/Homefeed');

exports.register = function ( server, options, next ) {

  server.route({
    method: 'GET',
    path: '/homefeed',
    handler: HomefeedHandler.pathRoot
  });

  server.route({
    method: 'GET',
    path: '/homefeed/get',
    handler: HomefeedHandler.pathGet
  });

  return next();
};

exports.register.attributes = {
  name: 'homefeed-endpoint'
};