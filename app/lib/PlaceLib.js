"use strict";
var PlaceModel = require('../models/place');

let internals = {};

internals.getPlace = function ( id, cb ) {
  PlaceModel.find({ _id: id }, cb);
};

internals.savePlace = function ( data, cb ) {
  var newPlace = new PlaceModel({
    name: data.name,
    address: data.address,
    zipcode: data.zipcode,
    geopos: data.geopos,
    city: data.city,
    image: data.image,
    openingHours: data.openingHours,
    description: data.description,
    tags: data.tags
  });

  newPlace.save(cb);
};

internals.updatePlace = function ( data, cb ) {
  PlaceModel.update({
    _id: data.id
  }, {
    $set: data
  }, cb);
};

internals.deletePlace = function ( res, cb ) {
  PlaceModel.remove({ _id: res.id }, cb);
};

internals.likePlace = function ( placeId, userId, cb ) {
  PlaceModel.like(placeId, userId, cb);
};

module.exports = internals;
