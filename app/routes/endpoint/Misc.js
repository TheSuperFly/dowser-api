"use strict";

const Misc = require('../handler/Misc');

exports.register = function(server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: Misc.pathRoot
  });

  server.route({
    method: 'GET',
    path: '/v',
    handler: Misc.pathV
  });

  server.route({
    method: 'GET',
    path: '/up',
    handler: Misc.pathUp
  });

  return next();
};

exports.register.attributes = {
  name: 'misc-endpoint'
};