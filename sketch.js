const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundIMG, heroIMG, monsIMG;
var ground, hero, chain, mons;
var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15,
b16, b17, b18, b19;

function preload() {
backgroundIMG = loadImage("bg.png");
heroIMG = loadImage("images.png");
monsIMG = loadImage("mons.png");

}

function setup() {
  createCanvas(1200, 500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500,450,950,20);
  hero = new Hero(200,300,150,150);
  chain = new Slingshot(hero.body,{x:200, y:250});
  mons = new Mons(820,350,150,150);

  b1 = new Block(570,400,50,50);
  b9 = new Block(570,340,50,50);
  b10 = new Block(570,280,50,50);
  b11 = new Block(570,220,50,50);
  b12 = new Block(570,160,50,50);
  b13 = new Block(570,100,50,50);


  b2 = new Block(460,400,50,50);
  b3 = new Block(460,340,50,50);
  b4 = new Block(460,280,50,50);
  b5 = new Block(460,220,50,50);
  b6 = new Block(460,160,50,50);
  b7 = new Block(460,100,50,50);
  b8 = new Block(460,40,50,50);

  b14 = new Block(680,400,50,50);
  b15 = new Block(680,340,50,50);
  b16 = new Block(680,280,50,50);
  b17 = new Block(680,220,50,50);
  b18 = new Block(680,160,50,50);
  b19 = new Block(680,100,50,50);

}

function draw() {
  if(backgroundIMG)
  background(backgroundIMG);
  Engine.update(engine);
  text(mouseX + "  " + mouseY,50,50);

  ground.display();
  hero.display();
  chain.display();
  mons.display();

  b1.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();

  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();

  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

