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
  }
});

module.exports = mongoose.model('Place', Place);