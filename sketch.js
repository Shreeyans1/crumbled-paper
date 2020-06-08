var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var paperBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dusbin1,dusbin2,


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperBody = Bodies.circle(200, 200, 5, {restitution:0.8, isStatic:false});
	World.add(world, paperBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, 800, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  dustbin1 = new Dustbin(600,625,100,20);
}


function draw() {

Engine.update(engine);
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  drawSprites();
  
  
    ellipseMode(RADIUS);
  ellipse(paperBody.position.x,paperBody.position.y,20,20);
  rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,20);
	
	dustbin1.display();
}
function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBody.body, paperBody.body.position,{x:85,y:-85});
	}
}


