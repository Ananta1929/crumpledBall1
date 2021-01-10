
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dust1;
var ground;
var dust2,dust3;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,670,width,20);
	ground.debug = true;
	paper = new Paperball(200,450,40);
	
	dust1 = new Dustbin(1200,650);


	Engine.run(engine);
  
}


function draw()
 {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  dust1.display();
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.position,{x:350,y:-350})
	}
}

