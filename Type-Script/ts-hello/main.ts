import {Point} from './point'
let p = new Point(10, 20)
let x = p.X // this is property not a variable
let xx = p.getX() // same as previoud line but this is method
p.draw()