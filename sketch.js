var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var polygon;


function setup(){

var canvas=createCanvas(1200,400);
engine=Engine.create();
world=engine.world;

block8=new block8(330,235,30,40);
block9=new block8(360,235,30,40);
block10=new block8(390,235,30,40);
block11=new block8(420,235,30,40);
block12=new block8(450,235,30,40);
block13=new block8(360,195,30,40);
block14=new block8(390,195,30,40);
block15=new block8(420,235,30,40);
block16=new block8(390,155,30,40);
}

function draw(){
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
}

polygon=Bodies.circle(50,200,20);{
World.add(world,polygon);

slingShot=new slingShot=new Slingshot(this.polygon,{x:100,y:200};

imageMode(CENTER)
image(polygon_img,polygon.position.x,polygon.position.y,40,40);

slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
function keyPressed(){
    if(keyCode===32){
        slingShot.attach(bird.body);
    }
}