
function setup() {
  createCanvas(400,400);
  box=createSprite(200,200,20,20)
  box.shapeColor="green"
box.velocityX=4;
box.velocityY=2
edges=createEdgeSprites()
}

function draw() 
{
  background(30);
  box.bounceOff(edges)
  drawSprites()

}




