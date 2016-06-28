var endpoints = require('../config/endpoint');

var global = {};

global.env = require('./development') || require('./production');

global.serverProperties = {
  load: { sampleInterval: 1000 },
  connections: {
    router: {
      stripTrailingSlash: true
    }
  }
};

global.goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [ {
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [ { log: '*', response: '*' } ]
    }, {
      module: 'good-console'
    }, 'stdout' ],
    http: [ {
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [ { error: '*' } ]
    } ]
  }
};

global.serverRegister = [
  {
    register: require('good'),
    options: global.goodOptions
  },
  require('blipp')
];

for ( var i = 0; i < endpoints.length; i ++ ) {
  global.serverRegister.push(endpoints[ i ]);
}

module.exports = global;