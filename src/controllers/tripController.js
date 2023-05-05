const tripService = require('../services/tripService');

exports.getTrips = async (req, res) => {
    try {
        const trips = await tripService.getTrips();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({ message: 'Error when retrieving avatars' });
    }
};
