"use strict";

var Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

exports.savePlace = {
  name: Joi.string().max(32).required(),
  address: Joi.string().max(32).required(),
  zipcode: Joi.string().max(16).required(),
  city: Joi.string().max(32).required(),
  geopos: Joi.string().required(),
  image: Joi.string().required()
};

exports.updatePlace = {
  id: Joi.objectId(),
  name: Joi.string().max(32).optional(),
  address: Joi.string().max(32).optional(),
  zipcode: Joi.string().max(16).optional(),
  city: Joi.string().max(32).optional(),
  geopos: Joi.string().optional(),
  image: Joi.string().optional()
};

exports.getPlace = {
  id: Joi.objectId()
};

exports.deletePlace = {
  id: Joi.objectId()
};
