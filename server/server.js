// Bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Get set up for consistent testing:
let verbose = true;

// Declare global array to capture all inputs
const historicalEqArray = require('./modules/input-numbers');

// Start the app:
const app = express();

// Configure app:
// (could also use bodyParser in place of express)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Make public directory visible in browser:
app.use(express.static('server/public'));

// Turn app on:
let port = 5000;
app.listen(port, function () {
  // Test will be seen in Terminal:
  console.log('listening on port', port);
});

function calculateForMe(object) {
  if (verbose) {
    console.log('inCalculateForMe, object is:', object);
  }

  // create variables to represent the globalInputs properties:
  let number1 = Number(object.num1);
  let number2 = Number(object.num2);
  let dataOp = object.dataOp;

  if (dataOp === '+') {
    return number1 + number2;
  } else if (dataOp === '-') {
    return number1 - number2;
  } else if (dataOp === '*') {
    return number1 * number2;
  } else if (dataOp === '/') {
    return number1 / number2;
  } else if (dataOp === '%') {
    return (number1 + number2) / 100;
  }
}

app.post('/api/number_inputs', (req, res) => {
  // req.body = data {} in AJAX on client.js
  let addedInputEq = req.body.inputEq_to_add;
  console.log('req.body.inputEq_to_add:', addedInputEq);

  // Checking:
  // console.log('1st input in server:', globalInputs.num1);
  // console.log('2nd input in server:', globalInputs.num2);

  // use input object as argument in calc function:
  let calculation = calculateForMe(addedInputEq);

  // Add answer property to historical equations
  addedInputEq.answer = calculation;

  // Checking calculation:
  // console.log('Calculation is:', calculation);

  // Save properties of globalInputs to our historical equations:
  historicalEqArray.push(addedInputEq);

  // Checking what our historical equations array holds:
  console.log('historicalEqArray:', historicalEqArray);

  // This line took some time to figure out...
  // Sending a number defaults to status code, so convert to string:
  res.status(200).send(calculateForMe(addedInputEq).toString());
});

// Tell server what to send when '/api/historical_equations' is requested
app.get('/api/historical_equations', (req, res) => {
  // Checking:
  console.log('GET request for historical equations', historicalEqArray);

  res.send(historicalEqArray);
});
