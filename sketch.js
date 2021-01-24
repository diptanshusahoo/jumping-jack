const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var box1,box2;
var newground;
var pig1;
var log1;
var box3;
var box4;
var pig2;
var log2;
var bird1;
function setup(){
  var canvas = createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;  
 box1=new box(700,320,70,70);
 box2=new box(920,320,70,70);
 newground=new ground(600,height,1200,20);
 pig1=new Pig(810,350);
 log1 = new log(650,260,300,PI/2);
 box3 = new box(500,240,70,70);

 bird1= new bird(100,200);
}

function draw(){
  background("grey");
  Engine.update(engine);
  box3.display();
  pig1.display();
  log1.display();
  
  bird1.display();
  newground.display();
}