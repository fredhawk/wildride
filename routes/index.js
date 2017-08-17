const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const jobController = require('../controllers/jobController');

router.post('/register', userController.signup);

router.post('/postjob', jobController.postJob);

module.exports = router;
