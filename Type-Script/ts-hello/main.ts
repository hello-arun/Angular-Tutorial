// As we know all this code will get compiled without any error
// but Type script warns us about the bad habit.

var a = 5
a = "Hello" // Not valid in TypScript
// If we do not know value ahead of time 
// This is acceptabel but it also creates probelem
var b
b = 1
b = true
b = 'a'
// Whats the solution ??
// Here is the sol
var c
c = 1
c = true // You can see it shows error warning  

// All different types of variables
var aa: number
var bb: boolean
var cc: string
var dd: any
var ee: number[] = [1, 2, 3]
var ff: any[] = [1, true, 'a']

// Bad habit
const ColorRed = 0
const ColorGreen = 1
const ColorBlue = 2

// Good habit
enum Color { Red, Green, Blue }
let backgroundColor = Color.Blue  // We get intellisense here

// See the main.js file to get feel how enum works in javascript
// You will instantly rise in love