const {documentClient} = require('../config/aws');
const uuid = require('uuid');

const tableName = 'avatars';

class AvatarService {
    async getAvatars() {
        const params = {
            TableName: tableName
        };

        try {
            const data = await documentClient.scan(params).promise();
            return data.Items;
        } catch (error) {
            console.error('Error when retrieving avatars :', error);
            throw error;
        }
    }

    async addAvatar(avatar) {
        const params = {
            TableName: tableName,
            Item: {
                id: uuid.v4(),
                name: avatar.name,
                description: avatar.description,
                image: avatar.image
            }
        };

        try {
            await documentClient.put(params).promise();
            return params.Item;
        } catch (error) {
            console.error('Error when adding avatar :', error);
            throw error;
        }
    }
}

module.exports = new AvatarService();
