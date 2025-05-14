const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const { sendNotificationToParent } = require('../controllers/notificationController');

router.post('/presence', verifyToken, isAdmin, (req, res) => sendNotificationToParent(req, res, 'presence'));
router.post('/payment', verifyToken, isAdmin, (req, res) => sendNotificationToParent(req, res, 'payment'));

module.exports = router;