const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String},
  location: { type: String, required: true }
});

module.exports = mongoose.model('Place', placeSchema);



