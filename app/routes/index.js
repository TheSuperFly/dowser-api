"use strict";

exports.register = function ( server, options, next ) {
  server.route({
    path: '/places',
    method: 'GET',
    handler: require('./places/PlacesRoute')
  });

  return next();
};

exports.register.attributes = {
  name: 'index-route'
};