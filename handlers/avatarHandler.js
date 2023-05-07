const avatarService = require('../src/services/avatarService');
const { createLambdaResponse } = require('../src/utils/common.js');

getAvatars = async (event, context) => {
    const response = await avatarService.getAvatars();
    return createLambdaResponse(200, response);
};

addAvatar = async (event, context) => {
    const requestBody = JSON.parse(event.body);
    const response = await avatarService.addAvatar(requestBody);
    return createLambdaResponse(201, 'Avatar added successfully');
};

module.exports = {
    getAvatars,
    addAvatar
}
