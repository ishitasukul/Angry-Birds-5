class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility= 255;
  }
display(){
  //console.log(this.body.speed);
  if (this.body.speed<3){
  super.display();
  } else {
    World.remove(world, this.body);
    push();
    this.visibility= this.visibility-5;
    tint(255,this.visibility);
   
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);  
    pop();

    
  }
  
}
};

//1 byte= 8 bits - either 0 or 1
 //0 - 255

 /*
 00000000   -  0
 00000001   -  1
 00000010   -  2
 .
 .
 .
 .
//2^8---> 2^0= 255
 11111111 - 255

 //0 is off byte, 1 is on byte




25 = 2* 10^1 + 5*10^0 = 25


10 = 1* 2^1 + 0*2^0 = 2


*/

//incrementing and decrementing-- ex: +3, -3 
//ASCII key codes 