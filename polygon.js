class Polygon {
    constructor(x, y) {
        var options = {
            friction:1.0,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, 25, options);
        this.image = loadImage("polygon.png")
        World.add(world, this.body)
    }
    display() {
        push()
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 50, 50)
        pop();
    }
}