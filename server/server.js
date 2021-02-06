// Bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Start the app:
const app = express();

// Configure app:
// (could also use bodyParser in place of express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make public directory visible in browser:
app.use(express.static('server/public'));

// Get set up for consistent testing:
let verbose = true;

// Turn app on:
let port = 5000;
app.listen(port, function () {
  console.log('listening on port', port);
});
