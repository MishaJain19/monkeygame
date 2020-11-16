
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0,survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(700,300);
  monkey=createSprite(50,200,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(350,270,1400,60);
  ground.x=ground.width/2;
}


function draw() {
background("lightblue");
  fill("black");
  textSize(18);
  text("Score:"+score,250,50);
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,400,50)
  
  if(keyDown("space")&&monkey.y>100){
    monkey.velocityY=-10;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  ground.velocityX=-4;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  ground.shapeColor="green";
  monkey.collide(ground);
  spawnBanana();
  spawnObstacle();
 drawSprites(); 
}
function spawnBanana(){
  if(frameCount%80===0){
    banana=createSprite(700,100,20,20)
    banana.addImage(bananaImage);
    banana.y=Math.round(random(80,140))
    banana.scale=0.08;
    banana.velocityX=-4;
    banana.lifetime=175;
  }
}
function spawnObstacle(){
  if(frameCount%200===0){
    obstacle=createSprite(700,225,20,20)
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-4;
    obstacle.scale=0.08;
    obstacle.lifetime=175;
  }
}




