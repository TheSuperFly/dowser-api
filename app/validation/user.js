const Joi = require('joi');

exports.auth = {
  accessToken: Joi.string().required(),
  facebookId: Joi.number().required(),
  uuid: Joi.string().guid().required()
};