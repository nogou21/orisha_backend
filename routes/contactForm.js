const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');


router.post('/contact-form',formController.contactForm);

module.exports = { router }