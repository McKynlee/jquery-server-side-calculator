console.log('JS here');

$(document).ready(onReady);

// Get set up for consistent testing:
const verbose = true;

// Declaring global object to capture inputs from separate functions
let globalInputs = {};

function onReady() {
  console.log('jQ here');

  // Keep all event listeners in onReady
  // use 'submit' instead of 'click' to make input required
  // on submit, initiate function to capture input
  $(document).on('submit', '#calc-form', captureInput);
  $(document).on('click', '.opBtn', setOperator);
}

function captureInput(evt) {
  // Keep form from refreshing:
  evt.preventDefault();

  // Test that function is running
  if (verbose) {
    console.log('in captureInput');
  }

  // Create object to hold inputs:
  let inputNumbers = {
    number1: Number($('#number1').val()),
    number2: Number($('#number2').val()),
  };

  // Add to globalInputs object so I can use:
  globalInputs.num1 = inputNumbers.number1;
  globalInputs.num2 = inputNumbers.number2;

  // Use updated globalInputs as argument in function:
  console.log('Calculated for you:', calculateForMe(globalInputs));

  // Let's see how this shows on console!
  console.log('globalInputs in captureInput:', globalInputs);

  // Post input data to server
  $.ajax({
    // Create api URL to find common
    // communication ground with server
    url: '/api/number_inputs',
    method: 'POST',
    // data becomes req.body with bodyParser in server.js
    data: {
      inputEq_to_add: globalInputs,
    },
  })
    .then(function (response) {
      // test to see if we are receiving response:
      if (verbose) {
        console.log('Yep, yep - you bet! Response posted:', response);
      }
    })
    .catch(function (error) {
      if (verbose) {
        console.log('*****ERROR: InputEq NOT posted');
      }
    });
}

function setOperator() {
  // Test that we enter function on click:
  if (verbose) {
    console.log('in setOperator');
  }

  // declare variable to rep the value set = data-op
  // for each button clicked
  let operator = $(this).data('op');
  console.log(operator);

  // add data-op value to globalInputs object:
  globalInputs.dataOp = operator;

  // Make sure dataOp: operator added
  console.log('globalNumbers is now:', globalInputs);
}

function calculateForMe(object) {
  if (verbose) {
    console.log('inCalculateForMe');
    console.log('object is:', object);
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
