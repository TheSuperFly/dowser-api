"use strict";

const RandomHandler = require('../handler/Random');

exports.register = function ( server, options, next ) {
  server.route({
    method: 'GET',
    path: '/random/spawnRandomPlace',
    handler: RandomHandler.pathSpawnRandomPlace
  });

  return next();
};

exports.register.attributes = {
  name: 'random-endpoint'
};