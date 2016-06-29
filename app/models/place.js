"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var Place = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  zipcode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  geopos: {
    type: [ Number ],
    index: '2dsphere',
    required: true
  },
  image: {
    type: [ String ],
    required: true
  },
  openingHours: {
    type: [
      {
        day: String,
        hourOpening: Number,
        hourClosing: Number
      }
    ],
    required: false
  },
  description: {
    type: String,
    required: false
  },
  tags: {
    type: [ String ],
    required: false
  },
  like: {
    type: Number,
    default: 0,
    required: true
  },
  userLike: {
    type: [ Schema.Types.ObjectId ],
    select: false,
    ref: "User"
  }
});

Place.statics.like = function like ( placeId, userId, cb ) {
  //@TODO: Check if user exists.
  var self = this;

  self.update(
    {
      _id: placeId,
      userLike: { $ne: userId }
    },
    {
      $inc: { like: 1 },
      $push: { userLike: userId }
    }
  ).exec(function(err, data) {
      if (err) return cb(err, null);

      if (data.nModified == 0) {
        self.dislike(placeId, userId, function(err, data) {
          data.action = "dislike";
          return cb(err, data);
        });

      } else {
        data.action = "like";
        return cb(null, data);
      }
    });
};

Place.statics.dislike = function like ( placeId, userId, cb ) {
  this.update(
    {
      _id: placeId,
      userLike: userId
    },
    {
      $inc: { like: -1 },
      $pull: { userLike: userId }
    }
  )
    .exec(cb);
};

module.exports = mongoose.model('Place', Place);