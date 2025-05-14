const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin, isParent } = require('../middleware/authMiddleware');
const { addStudent, getAllStudents, getStudentQR } = require('../controllers/studentController');

router.post('/', verifyToken, isAdmin, addStudent);
router.get('/', verifyToken, isAdmin, getAllStudents);
router.get('/:id/qrcode', verifyToken, getStudentQR);

module.exports = router;
