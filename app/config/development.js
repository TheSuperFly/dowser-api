console.info("You're running this project with dev settings.");

var development = {};

development.server = {
  port: 7777,
  address: 'localhost'
};

development.db = {
  db: 'dowser',
  host: '127.0.0.1',
  user: '',
  pw: '',
  port: 27017
};

module.exports = development;