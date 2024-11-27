const Student = require('../Models/student');

// Register a new student
exports.registerStudent = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const student = new Student({ name, email, password });
        await student.save();
        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Mark attendance
exports.markAttendance = async (req, res) => {
    const { studentId, selfieUrl } = req.body;
    try {
        const student = await Student.findById(studentId);
        student.attendance.push({ date: new Date(), selfieUrl });
        await student.save();
        res.status(200).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get attendance history
exports.getAttendanceHistory = async (req, res) => {
    const { studentId } = req.params;
    try {
        const student = await Student.findById(studentId);
        res.status(200).json(student.attendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};