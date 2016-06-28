"use strict";

const Homefeed = require('../../lib/HomefeedLib');
const Reply = require('../../lib/ReplyLib');

var homefeed = {};

homefeed.pathRoot = function ( request, reply ) {
  reply("Welcome to /homefeed directory");
};

homefeed.pathGet = function ( request, reply ) {
  Homefeed.getHomefeed(function(err, data) {
    reply(Reply.basicReply(err, data));
  });
};

module.exports = homefeed;