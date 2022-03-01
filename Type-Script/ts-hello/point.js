"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    // export means it is available outside the scope of this class
    // NO need for ugly assignment this works well
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y); // implementation goes here
    };
    Point.prototype.getDistance = function (another) {
        // implentation goes here
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Object.defineProperty(Point.prototype, "X", {
        // better way by setting property
        get: function () {
            return this.x;
        },
        // similary for setter    
        set: function (value) {
            if (value < 0)
                throw new Error("Value cant be less than 0");
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
