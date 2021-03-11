var rabit, rabitImg
var crt; crtImg
var meat;

function preload(){
  rabitImg = loadImage("rabbit.png")
  crtImg = loadImage("carrot.png")
}

function setup() {
  createCanvas(1500,400);
  rabit = createSprite(80, 315, 50, 50);
  rabit.addImage(rabitImg)
  rabit.scale = 0.3

  edge = createEdgeSprites();
}
function draw() {
  background(0); 
  if(keyDown("space")){
   rabit.velocityY = -4;
  }
  rabit.velocityY = rabit.velocityY+0.4;
  rabit.collide(edge[3])
 food();
  drawSprites();
}

function food(){
  if(frameCount % 100 ===0){
  crt = createSprite(1500,100);
  crt.velocityX = -3
  crt.addImage(crtImg);
  crt.scale = 0.07
  crt.y = Math.round(random(10,200))
  }

}