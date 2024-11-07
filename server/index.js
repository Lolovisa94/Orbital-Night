const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON data

//// MongoDB connection
//const uri = process.env.MONGODB_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//  .then(() => console.log('MongoDB connected'))
//  .catch((err) => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
