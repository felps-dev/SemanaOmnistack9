const express = require('express');
const routes = express.Router();
const BookingController = require('../controllers/BookingController');

routes.post('/spots/:spot_id/booking', BookingController.store);

module.exports = routes;
