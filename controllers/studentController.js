const Student = require('../models/Student');
const QRCode = require('qrcode');

exports.addStudent = async (req, res) => {
    const { name, studentId, parent, category, subjects, paymentDate, program } = req.body;
    try {
        const qrCode = await QRCode.toDataURL(studentId);
        const student = new Student({ name, studentId, parent, category, subjects, paymentDate, program, qrCode });
        await student.save();
        res.status(201).json({ message: 'Student added' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('parent', 'email');
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getStudentQR = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) return res.status(404).json({ message: 'Not found' });
        res.json({ qrCode: student.qrCode });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
