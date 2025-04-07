const express = require('express');
const generateImages = require('../controllers/imageController');
const userAuth = require('../middlewares/authUser');

const imageRouter = express.Router();

imageRouter.post('/generate-image', userAuth, generateImages);

module.exports = imageRouter;
