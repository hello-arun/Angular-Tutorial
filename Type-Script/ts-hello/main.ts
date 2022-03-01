let message = 'abc'
message.endsWith('c') // beautifull intellisense

// Type Assertions
let msg; // Any type 
msg = 'abc' // later declared as a string
let endsWithC;
endsWithC = msg.endsWith('c') // No intellisense
endsWithC = (<string>msg).endsWith('c') // beautiful intellisense
endsWithC = (msg as string).endsWith('c') // beautiful intellisense


//Arrow Functions

let log = function(message) {
    console.log(message)
}
// Simple
let doLog = (message) => {
    console.log(message)
    // more lines here
}

// For single line Simpler
let singleDoLog = (message) => console.log(message)
