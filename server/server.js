// Bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Get set up for consistent testing:
let verbose = true;

// Declare global array to capture all inputs
const inputNumbersArray = require('./modules/input-numbers');

// Bring in calculations function:
// let calculateForMe = require('./modules/calculations');

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
  let number1 = object.num1;
  let number2 = object.num2;
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

  inputNumbersArray.push(addedInputEq);

  // console.log('1st input in server:', globalInputs.num1);
  // console.log('2nd input in server:', globalInputs.num2);
  console.log('req.body.inputEq_to_add:', addedInputEq);

  // use input object as argument in calc function:
  let calculation = calculateForMe(addedInputEq);

  console.log('Calculation is:', calculation);

  res.sendStatus(200);
});

// Tell server what to send when 'api/inputEq_to_add' is posted
// app.get('/api/number_inputs', (req, res) => {
//   console.log('1st input in server:', globalInputs.num1);
//   console.log('2nd input in server:', globalInputs.num2);

//   res.send(calculation);
// });
