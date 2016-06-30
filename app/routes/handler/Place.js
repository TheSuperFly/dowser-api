"use strict";

const Places = require('../../lib/PlaceLib');
const Reply = require('../../lib/ReplyLib');

var places = {};

// SECTIONS : Paths

places.pathRoot = function ( request, reply ) {
  reply("Welcome to /places directory");

};

places.pathGet = function ( request, reply ) {
  var id = request.params.id;

  Places.getPlace(id, function ( err, data ) {
    reply(Reply.basicReply(err, data[ 0 ]));
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

  Places.updatePlace(data, function ( err, data ) {
    reply(Reply.updateReply(err, data));
  });

};

places.pathDelete = function ( request, reply ) {
  var res = places._getData(request.payload);

  Places.deletePlace(res, function ( err, data ) {
    reply(Reply.basicReply(err, data))
  });

};

places.pathLike = function ( request, reply ) {
  var data = places._getData(request.payload);

  Places.likePlace(data.placeId, data.userId, function ( err, data ) {
    reply(Reply.basicReply(err, data));
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

  if ( request.website ) {
    res.website = request.website;
  }

  if ( request.geopos ) {
    res.geopos = request.geopos;
  }

  if ( request.image ) {
    res.image = request.image;
  }

  if ( request.openingHours ) {
    res.openingHours = request.openingHours;
  }

  if ( request.description ) {
    res.description = request.description;
  }

  if ( request.tags ) {
    res.tags = request.tags;
  }

  // Alias to placeId.
  if ( request.id ) {
    res.id = request.id;
  }

  if ( request.placeId ) {
    res.placeId = request.placeId;
  }

  if ( request.userId ) {
    res.userId = request.userId;
  }

  return res;
};

module.exports = places;