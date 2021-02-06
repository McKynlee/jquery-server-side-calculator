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
  // Test will be seen in Terminal:
  console.log('listening on port', port);
});

// Tell server what to send when 'api/inputEq_to_add' is posted
app.post('/api/number_inputs', (req, res) => {
  // req.body = data {} in AJAX on client.js
  let addedInputEq = req.body.inputEq_to_add;

  console.log('1st input:', addedInputEq.number1);
  console.log('2nd input:', addedInputEq.number2);
  res.status(200).send('TBD to send');
});
