const express = require('express');
const routes = express.Router();
const sessions_routes = require('./sessions_routes');
const spot_routes = require('./spot_routes')
const dashboard_routes = require('./dashboard_routes')
const booking_routes = require('./booking_routes')

routes.use(sessions_routes);
routes.use(spot_routes);
routes.use(dashboard_routes);
routes.use(booking_routes);

module.exports = routes;
