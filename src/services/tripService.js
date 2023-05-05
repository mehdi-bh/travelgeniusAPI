const {documentClient} = require('../config/aws');
const uuid = require('uuid');

const tableName = 'trips';

class TripService {
    async getTrips() {
        const params = {
            TableName: tableName
        };

        try {
            const data = await documentClient.scan(params).promise();
            return data.Items;
        } catch (error) {
            console.error('Error when retrieving trips :', error);
            throw error;
        }
    }
}

module.exports = new TripService();
