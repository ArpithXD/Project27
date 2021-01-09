
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//roof
	roof = new Roof(375, 100, 400, 35);
	
	//bobs
	bob1 = new Bob(215,475,40);
	bob2 = new Bob(295,475,40);
	bob3 = new Bob(375,475,40);
	bob4 = new Bob(455,475,40);
	bob5 = new Bob(535,475,40);
	bobDiameter = 40;

	//constrained rope

	rope1 = new Rope(bob1.body,roof.body, -bobDiameter*4,0);
	rope2 = new Rope(bob2.body,roof.body, -bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body, 0,0);
	rope4 = new Rope(bob4.body,roof.body, bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body, bobDiameter*4,0);

	Engine.run(engine);
  
}


function draw() {
  background(200);
  rectMode(CENTER);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-75, y:75})
	}
}


