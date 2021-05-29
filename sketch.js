const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var drops = [];
var maxDrops = 100;

var Thunder, Thunder1, Thunder2, Thunder3, Thunder4;

var  ThunderFrame = 0;

var backgroundImage;

function preload(){
    Thunder1 = loadImage("thunderbolt/1.png");
    Thunder2 = loadImage("thunderbolt/2.png");
    Thunder3 = loadImage("thunderbolt/3.png");
    Thunder4 = loadImage("thunderbolt/4.png");
    backgroundImage = loadImage("gotham.png");
}


function setup(){
   canvas = createCanvas(400,700);
   engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200,600);

    if(frameCount % 150 === 0){
        for(var i =0; i < maxDrops ; i++ ){
            drops.push(new Drops(random(50,200), random(50,700)));
        }
    }
 
}

function draw(){
    background(backgroundImage);
    Engine.update(engine);
    umbrella.display();

    rand = Math.round(random(1,4));
    if(frameCount % 80 === 0){
        ThunderFrame = frameCount;
        Thunder = createSprite(random(10,370), random(-500,-100), 10, 10)
        switch(rand){
            case 1 : Thunder.addImage(Thunder1);
            break;

            case 2 : Thunder.addImage(Thunder2);
            break;
            
            case 3 : Thunder.addImage(Thunder3);
            break;

            case 4 : Thunder.addImage(Thunder4);
            break;

            default: break;
    }
    Thunder.scale = random(0.3,0.6);


    }

    if (ThunderFrame + 10 === frameCount && Thunder){
        Thunder.destroy();
    }
    for(var j =0 ; j < maxDrops ; j++){
        drops[j].display();
        drops[j].update();
    }

    drawSprites();
}   

