[x] Wiring: HTML, jQuery, JS, Server, Public, node, Express

# Client Side

[x] HTML:
-----[x] 2 inputs boxes
-----[x] + - \* / % buttons for math operations
-----[x] C clear button
[x] Capture input in object
-----[x] Create click/submit event listener
[] Send this object to server via POST

# Server Side

[] Require express
[] declare app and port
[] get app running (.listen)
[] get bundled object on inputs from client
[] Appropriately compute numbers based off inputs
[] Send back ok once calc complete
[] Keep history of all input equations []
[] Render all historical calculations on the DOM (GET)

## STRETCH

[] Style the interface to look like a calculator.
[] Require all inputs be filled before POST
[] Make a DELETE request that links to HTML button for user to clear history. (AC Button)
[] Allow users to click on historical equation and re-run it
[] Deploy to Heroku
