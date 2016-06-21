"use strict";

const mongoose = require('mongoose');
const config = require('../config/development').db;

const port = (config.port.length > 0) ? ':' + config.port : '';
const login = (config.user.length > 0) ? config.user + ':' + config.pw + '@' : '';
const uristring =  'mongodb://' + login + config.host + port + '/' + config.db;

const mongoOptions = { db: { safe: true } };

mongoose.connect(uristring, mongoOptions);

const dbConnect = mongoose.connection;

dbConnect.on('error', (err) => {
  if (err) {
    console.error(err.message);
  }
});