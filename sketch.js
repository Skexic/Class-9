var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,30,30)
  ball.shapeColor="green"
}

function draw() 
{
  background(30);

if(keyDown("RIGHT_ARROW")){
ball.x=ball.x+2
}


drawSprites()
}




