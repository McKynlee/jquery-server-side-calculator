
function determineOperator()

function calculateForMe(num1, num2, dataOp) {
  if (dataOp == '+') {
    return num1 + num2;
  } else if (dataOp == '-') {
    return num1 - num2;
  } else if (dataOp == '*') {
    return num1 * num2;
  } else if (dataOp == '/') {
    return num1 / num2;
  } else if (dataOp == '%') {
    return (num1 + num2) / 100;
  }
}
