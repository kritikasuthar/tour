const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

router.post('/add', async (req, res) => {
  const { name, description, image, location} = req.body;
  const newPlace = new Place({ name, description, image, location });

  try {
    const savedPlace = await newPlace.save();
    res.status(200).json(savedPlace);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

  router.get('/', async (req, res) => {
    try {
      const places = await Place.find();
      res.status(200).json(places);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a city
  router.delete('/:id', async (req, res) => {
    try {
      const place = await Place.findByIdAndDelete(req.params.id);
      if (!place) {
        return res.status(404).json({ message: 'Place not found' });
      }
      res.status(200).json({ message: 'Place deleted successfully', place });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });

module.exports = router;
