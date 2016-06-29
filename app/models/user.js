"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var User = new Schema({
  facebookId: {
    type: String,
    select: false
  },
  uuid: {
    type: String,
    select: false
  },
  status: {
    type: Number,
    select: false,
    default: 2
  },
  likedPlaces: {
    type: [ Schema.Types.ObjectId ],
    select: false,
    ref: "Place"
  },
  ignoredPlaces: {
    type: [ Schema.Types.ObjectId ],
    select: false,
    ref: "Place"
  }
});

module.exports = mongoose.model('User', User);