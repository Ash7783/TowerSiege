const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1;
var polygon;
var slingshot;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(520, 300, 275, 15)

  box1 = new Box(520, 275)
  box2 = new Box(520, 275)
  box3 = new Box(520, 275)
  box4 = new Box(540, 275)
  box5 = new Box(500, 275)
  box6 = new Box(560, 275)
  box7 = new Box(480, 275)
  box8 = new Box(470, 215)
  box9 = new Box(570, 215)

  polygon= new Polygon(190,225)
  slingshot = new Slingshot(polygon.body,{x:190,y:225})


  Engine.run(engine);
}

function draw() {
  background(56, 44, 44);
  text(mouseX + "," + mouseY, mouseX, mouseY)

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  polygon.display();
  slingshot.display();

}

function mouseDragged(){
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}