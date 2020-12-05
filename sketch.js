var car,wall,speed,weight,thick;

function setup() {
  createCanvas(800,400);
  speed = random(223,321);
  weight = random(30,52);
  thick=random(22,83);

  car = createSprite(50, 200, 50, 10);
  car.velocityX = speed;
 wall = createSprite(400, 200, thick, height/2);
 wall.shapeColor=color(80,80,80);

 

}

function draw() {
background("black");


 if(wall.x-car.x<(car.width+wall.width)/2){

  car.velocityX=0;

  var damage=0.5*weight*speed*speed/(thick*thick*thick);

  if(damage>10){
  wall.shapeColor=color("red");
}

if(damage<10){
  wall.shapeColor=color("green");

 }   
}

  drawSprites();
}