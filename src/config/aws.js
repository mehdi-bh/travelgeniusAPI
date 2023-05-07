const AWS = require('aws-sdk');
const config = require( '../../config.json' );

const documentClient = new AWS.DynamoDB.DocumentClient({
    region: config.REGION
});

module.exports = {
    documentClient
}