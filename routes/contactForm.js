const express = require('express');
const router = express.Router();
const formController = require('../controllers/formController');
const newsletterController = require('../controllers/newsletterController');


router.post('/contact-form',formController.contactForm);
router.post('/newsletter',newsletterController.newsletterController);

module.exports = { router }