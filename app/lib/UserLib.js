"use strict";
var UserModel = require('../models/user');

let internals = {};

let userStatus = {
  0: "banned",
  1: "new_user",
  2: "known_user"
};

/**
 * Get User Status
 * @param facebookId {String} - Facebook Id
 * @param cb {Function}
 * @returns {MongoDbError} - Erreur Mongo
 * @returns {String} - Status Code
 */
internals.getUserStatus = function ( facebookId, cb ) {
  UserModel
    .find({ facebookId: facebookId })
    .select('status')
    .exec(function ( err, status ) {
      if ( err ) return cb(err, null);

      if (status.length === 0) {
        cb(null, userStatus[1]);
      } else {
        cb(null, userStatus[status])
      }

    })
};

 

module.exports = internals;