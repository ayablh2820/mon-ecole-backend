const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'parent'], required: true },
    phone: String,
    fcmToken: String // لتخزين رمز الإشعار Firebase لكل ولي
});

module.exports = mongoose.model('User', userSchema);
