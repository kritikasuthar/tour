const express = require('express');
const router = express.Router();
const multer = require('multer');
const Place = require('../models/Place');
const path = require('path');

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Add a new place
router.post('/add', upload.single('image'), async (req, res) => {
  const { name, description, location } = req.body;
  const image = req.file ? req.file.path : null;

  if (!name || !description || !location || !image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newPlace = new Place({ name, description, image, location });

  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    console.error("Error adding place:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get all places
router.get('/', async (req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    console.error("Error fetching places:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Serve static files from the uploads directory
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = router;
