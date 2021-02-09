# Description

_Duration: Approximately 15 hours_

This application was created to serve as an in-browser calculator. I wanted to make all calculations that were input visible on the DOM, and allow those historical calculations to be accessed for reuse.

Here is a starting view of the calculator layout:

![](/images/Calculator1.png)

Currently, numbers for calculation need to be typed into the two input boxes, and an operator button selected. The equals button acts as the form submit to send the inputs to the server. The server then responds to the GET request from the client, and jQuery was used to render the following information to the DOM:

1. The complete calculation with both numbers, operator selected, and answer all rendered to an unordered list below the calculator.
1. The calculated answer displays next to "Answer" in the display window above the calculator.
   _In the next upgrade, the number buttons will have full functionality and the number input text boxes will be removed._

![](/images/Calculator2.png)

Previously entered calculations, shown on the DOM in an unordered list below the calculator, can be individually selected and re-shown in the Answer display window above the calculator:

![](/images/Calculator3.png)

# Installation

1. Open this repository in your favorite code editor (VS Code was used for creating this app).
1. Install node and express (don't worry, I've already got a nifty .gitignore file to avoid committing and pushing the massive node_modules!) - simply run "npm install" in your terminal.
1. Type npm start into your terminal to start the server.
1. Run localhost:5000/ in your browser.

# Usage

1. Enter any number in one of the input boxes. _NOTE: steps 1-3 can be done in any order_
1. Decide which operator you want to use [addition +, subtraction -, multiplication *, division /, or percent %] and click on that specific button on the calculator face.
   1. NOTE: the percent % button currently adds the two input numbers together and divides them by 100, to find the percentage of their sum. In the next upgrade, when the input boxes are removed and the number buttons have functionality, the percent button will also upgrade to giving you the percent-value of the number you select on the buttons (so selected number / 100).
1. Enter any number in the second input box. _NOTE: both input boxes must be filled out before moving on to the next step, or you will receive an alert reminding you to do so._
1. Click on the blue equal sign button on the calculator face (=).
1. The answer to your request will be displayed in the "Answer" window with a black background, directly above the calculator face. The entire equation will also appear in a list below "Previous equations" underneath the calculator.
1. You may click on any of the previous equations listed below the calculator and have them display in the "Answer" window directly above the calculator.
1. Clicking the red "C" button will clear the input boxes, but will not affect the previous equations showing on the bottom of the screen.
   1. NOTE: future functionality will include adding an "AC" or All Clear button that will clear the previous equations list at the bottom of the page along with clearing the input boxes.

# Built with:

- HTML
- CSS
- JavaScript
- jQuery (and AJAX/XHR)
- Node.js
- Express
- JSON

# Acknowledgement

Thanks to [Prime Digital Academy] (https://primeacademy.io/) who equipped and helped me to make this application a reality.
