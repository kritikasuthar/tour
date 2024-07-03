const path = require('path');// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const adminRoutes = require('./routes/admin');
app.use('/admin', adminRoutes);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Rajasthan Tourism Admin Panel');
});
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
