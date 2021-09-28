class Striker {
constructor(x,y){
var options = {
    isStatic:true
}
this.body = Bodies.rectangle(x,y,150,150,options);
this.character = loadImage("IMAGES/recharacterrun1.png");
World.add(world,this.body);
}
display(){
var pos = this.body.positions;
rectMode(CENTER);
fill(255);
image(this.character,pos.x,pos.y,150,150);
//console.log(this.body);
 }
}
