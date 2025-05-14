const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    studentId: String,
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    category: String,
    subjects: [String],
    paymentDate: Date,
    program: String,
    qrCode: String
});

module.exports = mongoose.model('Student', studentSchema);
