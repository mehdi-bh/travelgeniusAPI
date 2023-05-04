const express = require('express');
const router = express.Router();

const avatarController = require('../controllers/avatarController');

router.get('/', avatarController.getAvatars);
router.post('/', avatarController.addAvatar);

module.exports = router;
