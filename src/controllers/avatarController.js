const avatarService = require('../services/avatarService');

exports.getAvatars = async (req, res) => {
    try {
        const avatars = await avatarService.getAvatars();
        res.status(200).json(avatars);
    } catch (error) {
        res.status(500).json({ message: 'Error when retrieving avatars' });
    }
};

exports.addAvatar = async (req, res) => {
    try {
        const avatar = await avatarService.addAvatar(req.body);
        res.status(201).json(avatar);
    } catch (error) {
        res.status(500).json({ message: 'Error when adding avatar' });
    }
}
