"use strict";

const Places = require('../../lib/PlaceLib');
const Reply = require('../../lib/ReplyLib');
const Boom = require('boom');

var places = {};

// SECTIONS : Paths

places.pathRoot = function ( request, reply ) {
  reply("Welcome to /places directory");

};

places.pathGet = function ( request, reply ) {
  var id = request.params.id;

  Places.getPlace(id, function ( err, data ) {
    reply(Reply.basicReply(err, data));
  });

};

places.pathSave = function ( request, reply ) {
  var data = places._getData(request.payload);

  Places.savePlace(data, function ( err, data ) {
    reply(Reply.basicReply(err, data));
  });

};

places.pathUpdate = function ( request, reply ) {
  var data = places._getData(request.payload);

  Places.updatePlace(data, function(err, data) {
    reply(Reply.updateReply(err, data));
  });

};

places.pathDelete = function ( request, reply ) {
  var res = places._getData(request.payload);

  Places.deletePlace(res, function( err, data) {
    reply(Reply.basicReply(err, data))
  });

};

// SECTION : Private

places._getData = function ( request ) {
  var res = {};

  if ( request.name ) {
    res.name = request.name;
  }

  if ( request.address ) {
    res.address = request.address;
  }

  if ( request.zipcode ) {
    res.zipcode = request.zipcode;
  }

  if ( request.city ) {
    res.city = request.city;
  }

  if ( request.geopos ) {
    res.geopos = request.geopos.split(';');
  }

  if ( request.image ) {
    res.image = request.image.split(';');
  }

  if ( request.id ) {
    res.id = request.id;
  }

  return res;
};

module.exports = places;