'use strict';

const Hapi = require('hapi');

const global = require('../config/global');
const env = global.env;

const server = new Hapi.Server(global.serverProperties);

server.connection({ port: env.server.port });

require('../middleware/db');

server.register(global.serverRegister, ( err ) => {
    if ( err ) return console.error(err);

    server.start(( err ) => {
      if ( err ) throw err;
    });
});
