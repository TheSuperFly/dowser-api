'use strict';

const Place = require('../models/place');

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

module.exports = internals;