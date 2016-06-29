"use strict";
const RandomLib = require('../../lib/RandomLib');
const Places = require('../../lib/PlaceLib');
const Reply = require('../../lib/ReplyLib');

var RandomHandler = {};

RandomHandler.pathSpawnRandomPlace = function(request, reply) {
  var data = RandomLib.generateRandomPlace();

  Places.savePlace(data, function( err, data ) {
    reply(Reply.basicReply(err, data));
  });
};

module.exports = RandomHandler;