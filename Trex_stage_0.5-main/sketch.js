var player,playerRe;
var tiger,lion,bear,dog;
var bg;
var food;


function preload(){
  bg = loadImage("forest.png");
  king = loadImage("lion.png");
  plr = loadAnimation("plr.png","plr2r.png");
  plr45 = loadAnimation("plr3re.png","plr4re.png");



}


function setup(){
  createCanvas(900,500);

  player = createSprite(34,380,20,50);
  player.addAnimation("plrRunning",plr);
  player.scale = 1.5;

  tiger =createSprite(370,380,25,52);


  lion = createSprite(500,410)
  lion.addImage("hunting",king);
  lion.scale=0.9;
  


}

function draw(){
  background(bg);
  drawSprites();

  if(keyDown(RIGHT_ARROW)){
    player.x=player.x+2; 
   }
   
   if(keyDown(LEFT_ARROW)) {
     player.x=player.x-2;
     player.addAnimation("backWards",plr45);
     player.scale = 1.5;
   }
}
