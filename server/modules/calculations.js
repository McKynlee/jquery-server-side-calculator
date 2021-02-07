// Get set up for consistent testing:
let verbose = true;

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

module.exports = calculateForMe();
