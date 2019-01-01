class Snake{
  constructor(){
  	this.body = [];
    this.body[0] = createVector(0,0);
    this.xdir = 1;
    this.ydir = 0;
    this.len = 0;
  }

  grow(){
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
  }

  eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if(x == pos.x && y == pos.y){
      print("FOOD EATEN");
      this.grow();
      return true;
    }
    return false;
  }

  setDir(x,y){
    this.xdir = x;
    this.ydir = y;
  }

  update(){
    
   
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);

  }
  show(){
    for(let i=0; i<this.body.length; i++){
      fill(0);
      noStroke();
      rect(this.body[i].x, this.body[i].y, 1, 1);
    }
  }
}