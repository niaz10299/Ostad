const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/Student');

const router = express.Router();

// Student Registration
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ name, email, password: hashedPassword });
    await student.save();
    res.status(201).send('Student registered');
});

// Student Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const student = await Student.findOne({ email });
    if (!student || !await bcrypt.compare(password, student.password)) {
        return res.status(400).send('Invalid credentials');
    }
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
    res.cookie('token', token, { httpOnly: true }).send('Logged in');
});

module.exports = router;
