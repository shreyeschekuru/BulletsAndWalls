

var bullet,wall,thickness;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(55,90)
	weight=random(400,1500)


	bullet=createSprite(50, 200, 50,50);   

	bullet.velocityX = speed;
	speed = random(223,321);
	weight=random(30,52);
	bullet.shapeColor=color("white");


    thickness = random(22,83);
  	wall=createSprite(1500,200, 60, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);
  drawSprites();

  if(hasCollided(bullet,wall)){
  	car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		bukllet.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		bullet.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		bullet.shapeColor=color(0,255,0);
	}
  }  
  
 
}

function hasCollided(xbullet,xwall){
	bulletRightEdge=xBullet.x + xbullet.width;
	wallLeftEdge=xwall.x;
	if (bulletRightEdge >= wallLeftEdge){
		return true
	}
	return false;
}


