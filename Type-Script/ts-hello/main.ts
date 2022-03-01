// Verbose way of doint
let drawPoint = (point: { x: number, y: number }) => {
    console.log("X: " + point.x + ", Y: " + point.y)
}
drawPoint({
    x: 1,
    y: 2
})

console.log("\n---Better Implementation---")

// To implement method we need class
class Point {
    x: number
    y: number
    z: number
    constructor(x: number, y: number, z?: number) {
        // parameter with ? are optional
        // if a variable is optional then all other variable
        // after that need also to be optional.
        this.x = x
        this.y = y
        this.z = z
    }

    draw() {
        console.log("X: " + this.x + ", Y: " + this.y) // implementation goes here
    }
    getDistance(another: Point) {
        // implentation goes here
    }
}
let p = new Point(10, 20)
p.draw()