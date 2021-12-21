
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
 
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//crear los cuerpos aquí.


	Engine.run(engine);
  
var ball_options={
istatic:false,
restitucion:0.3,
friction:0,
density:1.2
}


}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ball.show();

groundObj.display();
groundObj=new ground(width/2,670,width,20);
leftside = new ground(1100,600,20,120);



  drawSprites();
}


function keyPressed() {
   if(keyCode === UP_ARROW) {
   	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
   }
   }


function keyPressed() {
	if(keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
	}
	}
	