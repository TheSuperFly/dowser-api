"use strict";

const UserHandler = require('../handler/User');
const UserValidation = require('../../validation/user');

exports.register = function ( server, options, next ) {
  server.route({
    method: 'POST',
    path: '/user/auth',
    config: { validate: { payload: UserValidation.auth } },
    handler: UserHandler.pathAuth
  });

  return next();
};

exports.register.attributes = {
  name: 'user-endpoint'
};