const admin = require('firebase-admin');
const serviceAccount = require('../firebase-service-account.json'); // هذا ملف تحمّله من Firebase

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

exports.sendNotification = async (token, title, body) => {
  const message = {
    notification: { title, body },
    token,
  };
  try {
    await admin.messaging().send(message);
    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Error sending notification:', error);
  }
};
