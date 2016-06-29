"use strict";
const request = require('request');
const User = require('./UserLib');
const UserModel = require('../models/user');

let internals = {
  facebookApi: {
    base: 'https://graph.facebook.com/'
  }
};

let userStatus = {
  0: "banned",
  1: "new_user",
  2: "known_user"
};

/**
 * Checking then returning user status
 * @param facebookId {String} - Facebook Id
 * @param accessToken {String} - Access Token
 * @param cb
 */
internals.loginToFacebook = function ( facebookId, accessToken, cb ) {
  internals._validateAccessToken(facebookId, accessToken, function (validToken) {
    if (validToken == false) {
      return cb({
        success: false,
        message: "Invalid Facebook Token or Facebook ID."
      });
    }

    User.getUserStatus(facebookId, function(err, status) {
      if (err) {
        return cb({
          success: false,
          message: "Database Error"
        });
      }

      cb({
        success: true,
        status: status
      });
    });
  });
};

/**
 * Save new user to database
 * @param facebookId {String}
 * @param uuid {String}
 * @param cb {Function}
 */
internals.subscribeNewUser = function ( facebookId, uuid, cb ) {
  var newUser = new UserModel({
    facebookId: facebookId,
    uuid: uuid
  });

  newUser.save(cb);
};

/**
 * Validate access token & facebook ID
 * @param facebookId
 * @param accessToken
 * @param cb
 * @private
 */
internals._validateAccessToken = function ( facebookId, accessToken, cb ) {
  var options = {
    url: this.facebookApi.base + "me?access_token=" + accessToken,
    json: true
  };

  request(options, function (error, response, body) {
    if (!error && body.id == facebookId && response.statusCode == 200) {
      cb(true);
    } else {
      console.error(error);
      cb(false);
    }
  });

};

module.exports = internals;