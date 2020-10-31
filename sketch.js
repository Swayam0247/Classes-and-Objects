const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,580,70,70);
    box2 = new Box(920,580,70,70);
    pig1 = new Pig(810,580);
    log1 = new Log(810,510,290,PI/2)

    box3 = new Box(700,490,70,70);
    box4 = new Box(920,490,70,70);
    pig2 = new Pig(810,490);
    log2 = new Log(810,420,290,PI/2)

    box5 = new Box(810,400,70,70);
    log3 = new Log(740,400,150,PI/5)
    log4 = new Log(880,400,150,-PI/5)

    bird1 = new Bird(200,200)
    
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    ground.display();
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}