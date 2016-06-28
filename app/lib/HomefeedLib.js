'use strict';

const Place = require('../models/place');

let internals = {};

internals.getHomefeed = function(cb) {
  Place
    .find({})
    .limit(10)
    .skip(0)
    .sort('-_id')
    .exec(function(err, data) {
      cb(err, data);
    });
};

module.exports = internals;