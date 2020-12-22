var bullet;
var wall;
var speed,weight,thickness;
var bulletright,wallleft
function setup() {
  createCanvas(2000,400);
  speed=random(223,321)
  weight=random(30,52)
thickness=random(22,83)
  bullet=createSprite(100, 200, 50, 7);
  bullet.velocityX=speed;
  bullet.shapeColor="white"
  wall=createSprite(1300,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  
  

}

function draw() {
  background("black")
  if (collided(bullet,wall)){

    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if (damage>10){
     wall.shapeColor=color(255,0,0)
    }
    
    
    if (damage<10){
     wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();

  }
  