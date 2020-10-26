var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(600, 200, 50, 100);
 fixedRect = createSprite(200, 200, 100, 50);


 movingRect.shapeColor = "green";
 fixedRect.shapeColor = "green";
}

function draw() {;
  background(0,0,0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //collision detection algorithm

  console.log(movingRect.x - fixedRect.x);
  
    
  if ( movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 
      && fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
    ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
    
  }

 
   drawSprites();
}