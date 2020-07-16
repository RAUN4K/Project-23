var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var leftbox, centerbox, rightbox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1

	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	leftbox = createSprite(300, 610, 10, 100);
	centerbox = createSprite(400,655,200,10);
	rightbox = createSprite(500,610,10,100);

	leftbox.shapeColor = "red";
	centerbox.shapeColor = "red";
	rightbox.shapeColor = "red";


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0 , isStatic: false});
	World.add(world, packageBody);

	//Matter.Body.setStatic(packageBody, {isStatic: false});


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	leftbox = {isStatic: true};

	centerbox = {isStatic: true};

	rightbox = {isStatic: true};


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  

  drawSprites();
}


