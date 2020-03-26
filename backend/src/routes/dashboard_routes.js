const express = require('express');
const routes = express.Router();
const DashboardController = require('../controllers/DashboardController');

routes.get('/dashboard', DashboardController.show);

module.exports = routes;
