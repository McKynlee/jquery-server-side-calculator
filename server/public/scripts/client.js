console.log('JS here');

$(document).ready(onReady);

// Get set up for consistent testing:
let verbose = true;

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

  // Let's see how this shows on console!
  console.log('inputNumbers:', inputNumbers);

  // Post input data to server
  $.ajax({
    // Create api URL to find common
    // communication ground with server
    url: '/api/number_inputs',
    method: 'POST',
    // data becomes req.body with bodyParser in server.js
    data: {
      inputEq_to_add: inputNumbers,
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
  return inputNumbers;
}

function setOperator() {
  if (verbose) {
    console.log('in setOperator');
  }

  let operator = $(this).data('op');
  console.log(operator);
  return operator;
}
