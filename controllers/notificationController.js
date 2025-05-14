const { sendNotification } = require('../utils/fcm');
const Student = require('../models/Student');

exports.sendNotificationToParent = async (req, res, type) => {
    try {
        const { studentId } = req.body;
        const student = await Student.findById(studentId).populate('parent');
        const parent = student.parent;

        const fcmToken = parent.fcmToken;
        if (!fcmToken) return res.status(400).json({ message: 'No FCM token' });

        const message = type === 'presence'
            ? `${student.name} est présent aujourd'hui.`
            : `Rappel de paiement pour ${student.name}.`;

        await sendNotification(fcmToken, 'Notification MonÉcole', message);
        res.json({ message: 'Notification sent' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
