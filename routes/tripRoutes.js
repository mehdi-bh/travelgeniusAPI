const express = require('express');
const router = express.Router();

const tripService = require("../src/services/tripService");

router.get('/', async (req, res) => {
    try {
        const trips = await tripService.getTrips();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Error when retrieving avatars' });
    }
});

module.exports = router;
