require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // Define the Express app instance

// Verify that the environment variable is being loaded correctly
const uri = process.env.MONGODB_URI;
console.log('MongoDB URI:', uri); // Debug line to check the URI
if (!uri) {
    console.error('MONGODB_URI is not defined in environment variables');
    process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const citiesRoutes = require('./routes/cities');
app.use('/api/cities', citiesRoutes);

const placesRoutes = require('./routes/places');
app.use('/api/places', placesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
