const tripService = require('../src/services/tripService');
const { createLambdaResponse } = require('../src/utils/common.js');

module.exports.getTrips = async (event, context) => {
    const response = await tripService.getTrips();
    return createLambdaResponse(200, response);
};
