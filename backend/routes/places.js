const express = require('express');
const router = express.Router();
const multer = require('multer');
const Place = require('../models/Place');
const path = require('path');
const fs = require('fs');

const uploadsDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (_req, file, cb) => {
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
router.get('/', async (_req, res) => {
  try {
    const places = await Place.find();
    res.status(200).json(places);
  } catch (err) {
    console.error("Error fetching places:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});
router.delete('/api/places/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Place.findByIdAndDelete(id);
    res.status(200).json({ message: 'Place deleted successfully' });
  } catch (err) {
    console.error("Error deleting place:", err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;

// In your main app file (e.g., app.js or server.js), use the following to serve static files:

