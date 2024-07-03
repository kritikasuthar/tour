const express = require('express');
const router = express.Router();
const City = require('../models/City');

router.post('/add', async (req, res) => {
  const { name, briefDescription, description, images, rating } = req.body;
  const newCity = new City({ name, briefDescription, description, images, rating });

  try {
    const savedCity = await newCity.save();
    res.status(200).json(savedCity);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
  router.get('/', async (req, res) => {
    try {
      const cities = await City.find();
      res.status(200).json(cities);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Delete a city
  router.delete('/:id', async (req, res) => {
    try {
      const city = await City.findByIdAndDelete(req.params.id);
      res.status(200).json(city);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
});

module.exports = router;

