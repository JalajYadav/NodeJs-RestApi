const express = require('express');
const router = express.Router();

//TODO: Requiring The Controllers
const { authControllers } = require('../controllers/index.controllers.js');

router.post('/login', authControllers.login);

router.post('/register', authControllers.register)

module.exports = router;