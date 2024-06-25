const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  briefDescription: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: [String], required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model('City', citySchema);

