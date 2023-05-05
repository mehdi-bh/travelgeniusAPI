const express = require('express');
const router = express.Router();

const tripController = require('../controllers/tripController');

router.get('/', tripController.getTrips);

module.exports = router;
