const express = require('express');
const router = express.Router();

const avatarService = require("../src/services/avatarService");

router.get('/', async (req, res) => {
    try {
        const avatars = await avatarService.getAvatars();
        res.status(200).json(avatars);
    } catch (error) {
        res.status(500).json({ message: 'Error when retrieving avatars' });
    }
});

router.post('/', async (req, res) => {
    try {
        const avatar = await avatarService.addAvatar(req.body);
        res.status(201).json(avatar);
    } catch (error) {
        res.status(500).json({ message: 'Error when adding avatar : ' + error.message });
    }
});

module.exports = router;
