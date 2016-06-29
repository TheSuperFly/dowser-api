"use strict";

const PlaceHandler = require('../handler/Place');
const PlaceValidation = require('../../validation/places');

exports.register = function ( server, options, next ) {
  server.route({
    method: 'GET',
    path: '/place/get/{id}',
    config: { validate: { params: PlaceValidation.getPlace } },
    handler: PlaceHandler.pathGet
  });

  server.route({
    method: 'POST',
    path: '/place/save',
    config: { validate: { payload: PlaceValidation.savePlace } },
    handler: PlaceHandler.pathSave
  });

  server.route({
    method: 'PATCH',
    path: '/place/update',
    config: { validate: { payload: PlaceValidation.updatePlace } },
    handler: PlaceHandler.pathUpdate
  });

  server.route({
    method: 'DELETE',
    path: '/place/delete',
    config: { validate: { payload: PlaceValidation.deletePlace } },
    handler: PlaceHandler.pathDelete
  });

  server.route({
    method: 'POST',
    path: '/place/like',
    config: { validate: { params: PlaceValidation.likePlace } },
    handler: PlaceHandler.pathLike
  });

  return next();
};

exports.register.attributes = {
  name: 'place-endpoint'
};