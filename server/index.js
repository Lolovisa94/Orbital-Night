const express = require('express');
//const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//require('dotenv').config();

// Initialize app
const app = express();

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

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Serve React app for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const port = process.env.PORT || 5000;
// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
