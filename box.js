class Box {
    constructor(x, y) {
        var options = {
            restitution: 0.3,
            friction: 1,
            density: 0.5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(angle);
        stroke("black")
        strokeWeight(2)
        fill(63, 224, 208)
        rectMode(CENTER)
        rect(0, 0, 50, 50)
        pop();
    }
}