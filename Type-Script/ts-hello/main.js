"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var p = new point_1.Point(10, 20);
var x = p.X; // this is property not a variable
var xx = p.getX(); // same as previoud line but this is method
p.draw();
