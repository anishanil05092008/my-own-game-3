const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var striker;

var gameState,playerCount;
var form;
var database;

function preload(){

}
 
function setup() {
  createCanvas(displayWidth, displayHeight-150);
 // createSprite(400, 200, 50, 50);
 database = firebase.database();

 engine = Engine.create();
 world = engine.world;

 striker = createSprite(displayWidth- 100,displayHeight-250,150,150);
 form = new Form();
}

 //console.log(object);



function draw() {
  
  Engine.update(engine);
  
form.display();
 
 }