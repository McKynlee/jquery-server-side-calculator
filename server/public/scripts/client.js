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
}

function captureInput(evt) {
  // Test that function is running
  if (verbose) {
    console.log('in captureInput');
  }

  // Keep form from refreshing:
  evt.preventDefault();

  // Create object to hold inputs
  // May NOT NEED btn inputs, TBD:
  let inputEq = {
    number1: Number($('#number1').val()),
    number2: Number($('#number2').val()),
  };

  console.log('inputEq:', inputEq);
}
