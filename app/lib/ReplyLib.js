"use strict";
const Boom = require('boom');

let internals = {};

internals.basicReply = function(err, data) {
  if ( err ) {
    console.error(err);
    return Boom.wrap(err);
  }

  return {
    success: true,
    data: data
  };
};

internals.updateReply = function ( err, data ) {

  if (err) {
    console.error(err);
    return Boom.wrap(err, 'Internal MongoDB Error');
  }

  if (data.n === 0) {
    return Boom.notFound();
  }

  return internals.basicReply(null, data);
};

module.exports = internals;
