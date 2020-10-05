const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground, ball;
var box1, box2, box3,box4, box5, box6, box7;
var pig1,  pig2, pig3;
var log1, log2, log3, log4, log5;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world= engine.world;



    box1 = new Box(700,520,70,70);
    box2 = new Box(900,520,70,70);
    pig1 = new Pig(800,550);
    log1 = new Log(800,460,300,PI/2);
    
    box3 = new Box(700,440,70,70);
    box4 = new Box(900,440,70,70);
    pig2 = new Pig(800,420);
    log2 = new Log(800,380,300,PI/2);
    
    box5 = new Box(700,360,70,70);
    box6 = new Box(900,360,70,70);
    pig3 = new Pig(800,340);
    log3 = new Log(800,300,300,PI/2);

    box7 = new Box(800,280,70,70);
    log4 = new Log(750,220,150,PI/7);
    log5 = new Log(880,220,150,-PI/7);

    ground = new Ground(600, height, 1200, 20);

    

    

    console.log(box1.body.angle);
    console.log(box2.body.angle);
    //Engine.run(engine);

    
}




function draw(){
    background("black");
    Engine.update(engine);
     
    box1.display();
    box2.display();
    pig1.display();
    log1.display();
    console.log(box1.body.angle);
    console.log(box2.body.angle);
    //box3.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    box6.display();
    pig3.display();
    log3.display();

    box7.display();
    log4.display();
    log5.display();


    ground.display();

    
}