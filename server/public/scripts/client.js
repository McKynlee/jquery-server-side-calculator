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
  $(document).on('click', '.li-tag', rerunCalculation);
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
      globalInputs.answer = Number(response);
      console.log('globalInputs with answer:', globalInputs);

      // Declare variable to rep where we want to display answer on DOM:
      let answerOnDOM = $('.numDisplay');
      answerOnDOM.empty();
      // Add answer to DOM:
      answerOnDOM.append(response);

      // Call function to display history on DOM:
      displayHistoricalEq();
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
  // console.log('globalNumbers is now:', globalInputs);
}

function clearFunction() {
  if (verbose) {
    console.log('in clearFunction');
  }
  //reset
  let inputNumbers = {
    number1: Number($('#number1').val()),
    number2: Number($('#number2').val()),
  };

  inputNumbers.number1 = $('#number1').val('');
  inputNumbers.number2 = $('#number2').val('');
}

function displayHistoricalEq() {
  $.ajax({
    // Create api URL to find common
    // communication ground with server
    url: '/api/historical_equations',
    method: 'GET',
  })
    .then(function (arrayOfHistoricalEq) {
      // test to see if we are receiving response:
      if (verbose) {
        console.log('GET response:', arrayOfHistoricalEq);
      }
      // Declare variables targeting where we want to append in our HTML:
      let equationsOnDOM = $('.eqList');

      // Clear already-added items:
      equationsOnDOM.empty();

      for (let equation of arrayOfHistoricalEq) {
        equationsOnDOM.append(
          `<li data-answer='${equation.answer}' data-num1='${equation.num1}'
          data-dataop='${equation.dataOp}' data-num2='${equation.num2}' class='li-tag'>
            ${equation.num1} ${equation.dataOp} ${equation.num2} =
            ${equation.answer}
          </li>`
        );
      }
    })
    .catch(function (error) {
      if (verbose) {
        console.log('*****ERROR: historical equations NOT gotten');
      }
    });
}

function rerunCalculation() {
  let oldAnswer = $(this).data('answer');
  // re-Declare variable to rep where we want to display answer on DOM:
  let oldAnswerOnDOM = $('.numDisplay');
  oldAnswerOnDOM.empty();
  // Add answer to DOM:
  oldAnswerOnDOM.append(
    `<span>${$(this).data('num1')} ${$(this).data('dataop')} 
    ${$(this).data('num2')} = ${oldAnswer}</span>`
  );
}

// `<li data-answer='${equation.answer}' data-num1='${equation.num1}'
//           data-dataOp='${equation.dataOp}' data-num2-'${equation.num2}' class='li-tag'>
//             ${equation.num1} ${equation.dataOp} ${equation.num2} =
//             ${equation.answer}
//           </li>`;
