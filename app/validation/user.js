const Joi = require('joi');

exports.signUp = {
  username: Joi.string().required().max(32),
  password: Joi.string().required().max(32),
  facebookId: Joi.string().required().max(32)
};