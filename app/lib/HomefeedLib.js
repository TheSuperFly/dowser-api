'use strict';

const Place = require('../models/place');
const User = require('../models/user');

let internals = {};

internals.getHomefeed = function(cb) {
  Place
    .find({})
    .limit(10)
    .skip(0)
    .select('name address zipcode city geopos image')
    .sort('-_id')
    .exec(function(err, data) {
      cb(err, data);
    });
};

internals.getRelevantHomefeed = function(userId, cb) {
  User
    .findOne({ _id: userId })
    .populate('likedPlaces')
    .select('likedPlaces ignoredPlaces')
    .exec(function(err, data) {
      if (err) return cb(err, null);

      cb(null, err);
    });
};

module.exports = internals;