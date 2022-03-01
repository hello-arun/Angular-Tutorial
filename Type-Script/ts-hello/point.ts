export class Point {
    // export means it is available outside the scope of this class
    // NO need for ugly assignment this works well
    constructor(private x?: number, private y?: number) {
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y) // implementation goes here
    }
    getDistance(another: Point) {
        // implentation goes here
    }

    getX() {
        return this.x
    }
    // better way by setting property
    get X() {
        return this.x
    }
    // similary for setter    
    set X(value) {
        if (value < 0)
            throw new Error("Value cant be less than 0")
        this.x = value
    }

}