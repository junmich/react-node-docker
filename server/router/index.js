const express = require('express');
const router = express.Router();

const cars = require('../models/cars/all');

router.use('/', cars);

module.exports = cars;
