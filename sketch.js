
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);

	//groundSprite=createSprite(300, 150, 275,25);
	//groundSprite.shapeColor=color("grey");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobDiameter=40;



	startBobPositionX=width/4;
	startBobPositionY=height/3;

	

	roofObject = new roof(400,240,240,20);

	bobObject1=new BOB(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject2=new BOB(startBobPositionX-bobDiameter/2,startBobPositionY,bobDiameter);
	bobObject3=new BOB(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new BOB(startBobPositionX+bobDiameter/2,startBobPositionY,bobDiameter);
	bobObject5=new BOB(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	// bobObject1 = new BOB(160,233,40);
	// bobObject2 = new BOB(180,233,40);
	//bobObject3 = new BOB(150,200,35);
	//bobObject4 = new BOB(170,200,35);
	// bobObject5 = new BOB(190,200,35);
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2,220);
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter,220);
	rope3=new rope(bobObject3.body,roofObject.body,0,220);
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter,220);
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2,220);
//rope1=new rope(bobObject1.body,roofObject.body,110, 200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display(); 
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roofObject.display();
  
  drawSprites();
 
}



