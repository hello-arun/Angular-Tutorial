// As we know all this code will get compiled without any error
// but Type script warns us about the bad habit.
var a = 5;
a = "Hello"; // Not valid in TypScript
// If we do not know value ahead of time 
// This is acceptabel but it also creates probelem
var b;
b = 1;
b = true;
b = 'a';
// Whats the solution ??
// Here is the sol
var c;
c = 1;
c = true; // You can see it shows error warning  
// All different types of variables
var aa;
var bb;
var cc;
var dd;
var ee = [1, 2, 3];
var ff = [1, true, 'a'];
// Bad habit
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// Good habit
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Blue; // We get intellisense here
