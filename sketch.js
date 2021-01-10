
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,550,1200,10);

  box1 = new Box(900,530,200,20);
	box2 = new Box(800,490,20,100);
  box3 = new Box(1000,490,20,100);
  ball = new Ball(150,200,20);

 



  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);

 

  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ball.display();
}


function keyPressed() {
if (keyCode === UP_ARROW) {

  Matter.Body.applyForce(ball.Objectbody,ball.Objectbody.position,{x:85,y:85});
}
}
