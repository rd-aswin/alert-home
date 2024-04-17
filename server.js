// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Setting default value for alarm
let alarm = false;

// Define routes
// Route: /api
app.get('/api', (req, res) => {
  res.json({ alarm });
});

// Route: /activate
app.get('/activate', (req, res) => {
  // Set alarm to true
  alarm = true;
  res.send('Alarm activated.');

  // Revert alarm back to false after 10 seconds
  setTimeout(() => {
    alarm = false;
    console.log('Alarm deactivated.');
  }, 10000); // 10 seconds
});

// Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
