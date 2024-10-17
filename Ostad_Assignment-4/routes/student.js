const express = require('express');
const multer = require('multer');
const Student = require('../models/Student');
const auth = require('../middleware/auth');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Get Student Profile
router.get('/profile', auth, async (req, res) => {
    const student = await Student.findById(req.user.id).select('-password');
    res.json(student);
});

// Update Student Profile
router.put('/profile', auth, async (req, res) => {
    const { name, email } = req.body;
    await Student.findByIdAndUpdate(req.user.id, { name, email });
    res.send('Profile updated');
});

// Upload File
router.post('/upload', auth, upload.single('file'), async (req, res) => {
    const student = await Student.findById(req.user.id);
    student.profilePicture = req.file.path;
    await student.save();
    res.send('File uploaded');
});

// Read File
router.get('/file/:filename', (req, res) => {
    const filepath = path.join(__dirname, '../uploads', req.params.filename);
    res.sendFile(filepath);
});

// Delete File
router.delete('/file', auth, async (req, res) => {
    const student = await Student.findById(req.user.id);
    if (student.profilePicture) {
        fs.unlinkSync(student.profilePicture);
        student.profilePicture = null;
        await student.save();
        res.send('File deleted');
    } else {
        res.status(404).send('File not found');
    }
});

module.exports = router;
