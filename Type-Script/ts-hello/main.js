// Verbose way of doint
var drawPoint = function (point) {
    console.log("X: " + point.x + ", Y: " + point.y);
};
drawPoint({
    x: 1,
    y: 2
});
console.log("\n---Better Implementation---");
// To implement method we need class
var Point = /** @class */ (function () {
    function Point(x, y, z) {
        // parameter with ? are optional
        // if a variable is optional then all other variable
        // after that need also to be optional.
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y); // implementation goes here
    };
    Point.prototype.getDistance = function (another) {
        // implentation goes here
    };
    return Point;
}());
var p = new Point(10, 20);
p.draw();
