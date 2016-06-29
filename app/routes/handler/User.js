"use strict";

const Auth = require('../../lib/AuthLib');
const Reply = require('../../lib/ReplyLib');

let userStatus = {
  0: "banned",
  1: "new_user",
  2: "known_user"
};

var user = {};

user.pathAuth = function( request, reply ) {
  var userData = user._getData(request.payload);

  Auth.loginToFacebook(userData.facebookId, userData.accessToken, function(data) {
    if (data.status === userStatus[1]) {
      // If user is new, we subscribe him.
      Auth.subscribeNewUser(userData.facebookId, userData.uuid, function(err) {
        return reply(Reply.basicReply(err, data));
      });
    }

    return reply(Reply.basicReply(null, data));
  });

};

user._getData = function ( request ) {
  var res = {};

  if ( request.accessToken ) {
    res.accessToken = request.accessToken;
  }

  if ( request.facebookId ) {
    res.facebookId = request.facebookId;
  }

  if ( request.uuid ) {
    res.uuid = request.uuid;
  }

  return res;
};

module.exports = user;