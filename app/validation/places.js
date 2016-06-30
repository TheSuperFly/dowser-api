"use strict";

var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.savePlace = {
  name: Joi.string().max(32).required(),
  address: Joi.string().max(32).required(),
  zipcode: Joi.string().max(16).required(),
  city: Joi.string().max(32).required(),
  geopos: Joi.array().required(),
  image: Joi.array().required(),
  website: Joi.string().uri().optional(),
  openingHours: Joi.array().items(
    Joi.object().keys({
      day: Joi.number(),
      hourOpening: Joi.number(),
      hourClosing: Joi.number()
    })
  ).optional(),
  description: Joi.string().optional(),
  tags: Joi.array().optional()
};

exports.updatePlace = {
  id: Joi.objectId(),
  name: Joi.string().max(32).optional(),
  address: Joi.string().max(32).optional(),
  zipcode: Joi.string().max(16).optional(),
  city: Joi.string().max(32).optional(),
  geopos: Joi.string().optional(),
  image: Joi.string().optional(),
  website: Joi.string().uri().optional(),
  openingHours: Joi.array().items(
    Joi.object().keys({
      day: Joi.number(),
      hourOpening: Joi.number(),
      hourClosing: Joi.number()
    })
  ).optional(),
  description: Joi.string().optional(),
  tags: Joi.array().optional()
};

exports.getPlace = {
  id: Joi.objectId()
};

exports.likePlace = {
  placeId: Joi.objectId(),
  userId: Joi.objectId()
};

exports.deletePlace = {
  id: Joi.objectId()
};
