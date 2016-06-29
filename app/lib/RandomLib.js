"use strict";
const PlaceModel = require('../models/place');
const Faker = require('faker/locale/fr');

let internals = {};

internals.generateRandomPlace = function () {
  return {
    name: Faker.company.companyName(),
    address: Faker.address.streetAddress(),
    zipcode: Faker.address.zipCode(),
    city: Faker.address.city(),
    image: Faker.image.food(),
    geopos: [
      Faker.address.longitude(),
      Faker.address.latitude()
    ]
  };
};

module.exports = internals;
