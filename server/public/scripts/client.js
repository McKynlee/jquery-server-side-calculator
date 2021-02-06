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
}
