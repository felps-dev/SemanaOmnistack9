const express = require('express');
const routes = express.Router();
const SpotController = require('../controllers/SpotController');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const upload = multer(uploadConfig);

routes.post('/spots',   upload.single('thumbnail') ,SpotController.store);
routes.get('/spots'  ,  SpotController.index);

module.exports = routes;
