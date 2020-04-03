const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var engine,world;

function setup() {
  var canvas = createCanvas(1250,600);
  engine = Engine.create();
  world = engine.world;
     
   box1 = new Box (240,400,80,100);
   box2 = new Box (320,325,80,250);
   box2a = new Box (405,375,90,150);
   box3 = new Box (320,170,60,60);
   box4 = new Box (540,375,180,150);
   box5 = new Box (540,265,150,70);
   box5a = new Box (412,265,106,70);
   box6 = new Box (495,170,60,120);
   box7 = new Box (585,130,60,200);
   box8 = new Box (747,260,264,80);
   box9 = new Box (755,375,250,150);
   box10= new Box (755,150,60,140);
   ground = new Ground(400,460,2000,20);
 } 
function draw() {
  background(0);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box2a.display();
  box3.display();
  box4.display();
  box5.display();
  box5a.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  ground.display();
  // Triangle shapes
  triangle(290, 140, 320, 110, 350, 140);
  triangle(465,110,495,80,525,110);
  triangle(725,80,755,50,785,80);
}