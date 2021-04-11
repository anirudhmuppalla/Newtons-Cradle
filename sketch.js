
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	block = new Block(400,150,200,50)
	chain1 = new Chain()
	chain2 = new Chain()
	chain3 = new Chain()
	chain4 = new Chain()
	chain5 = new Chain()
	ball1 = new Ball()
	ball2 = new Ball()
	ball3 = new Ball()
	ball4 = new Ball()
	ball5 = new Ball()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



