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
  $(document).on('click', '#clearBtn', clearFunction);
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

  // Add to globalInputs object so I can use outside this function:
  globalInputs.num1 = inputNumbers.number1;
  globalInputs.num2 = inputNumbers.number2;

  // Let's see how this shows on console!
  console.log('globalInputs in captureInput:', globalInputs);

  // Post input data to server
  $.ajax({
    // Create api URL to find common
    // communication ground with server
    url: '/api/number_inputs',
    method: 'POST',
    // data becomes req.body with body-parser in server.js
    data: {
      inputEq_to_add: globalInputs,
    },
  })
    .then(function (response) {
      // test to see if we are receiving response:
      if (verbose) {
        console.log('The response is:', response);
      }
    })
    .catch(function (error) {
      if (verbose) {
        console.log('*****ERROR: InputEq NOT posted');
      }
    });
  // calculateThis();
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
  // console.log('globalNumbers is now:', globalInputs);
}

// function calculateThis() {
//   $.ajax({
//     // Create api URL to find common
//     // communication ground with server
//     url: '/api/number_inputs',
//     method: 'GET',
//   })
//     .then(function (response) {
//       // test to see if we are receiving response:
//       if (verbose) {
//         console.log('The answer is:', response);
//       }
//     })
//     .catch(function (error) {
//       if (verbose) {
//         console.log('*****ERROR: InputEq NOT gotten');
//       }
//     });
// }

function clearFunction() {
  if (verbose) {
    console.log('in clearFunction');
  }
  //reset
}
