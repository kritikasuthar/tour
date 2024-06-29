const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
      // Perform authentication (this is just a simplified example)
      const user = await User.findOne({ email });
      if (!user || !user.comparePassword(password)) {
        return res.status(400).json({ message: 'Invalid Credentials' });
      }
      // Generate token or whatever your login process involves
      res.json({ token: 'your-generated-token', user });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
  
  module.exports = router;