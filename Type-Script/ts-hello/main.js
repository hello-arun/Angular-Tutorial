var message = 'abc';
message.endsWith('c'); // beautifull intellisense
// Type Assertions
var msg; // Any type 
msg = 'abc'; // later declared as a string
var endsWithC;
endsWithC = msg.endsWith('c'); // No intellisense
endsWithC = msg.endsWith('c'); // beautiful intellisense
endsWithC = msg.endsWith('c'); // beautiful intellisense
//Arrow Functions
var log = function (message) {
    console.log(message);
};
// Simple
var doLog = function (message) {
    console.log(message);
    // more lines here
};
// For single line Simpler
var singleDoLog = function (message) { return console.log(message); };
