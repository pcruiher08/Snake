let snake;

function setup() {
  createCanvas(400, 400);
  snake = new Snake();
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
  	snake.setDir(-1,0);
  }else if(keyCode === RIGHT_ARROW){
  	snake.setDir(1,0);
  }else if(keyCode === DOWN_ARROW){
  	snake.setDir(0,1);
  }else if(keyCode === UP_ARROW){
  	snake.setDir(0,-1);
  }
}

function draw() {
  background(220);
  snake.update();
  snake.show();
}