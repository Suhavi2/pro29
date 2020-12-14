const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a,base1,base2,block1,block2,block3;
var block4,block5,block6,block7,block8,block9,polygonImg,polygon1;
var slingShot;
var circles=[];

function preload(){
polygonImg=loadImage("polygon.png")
}




function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
 base1=new Ground(200,510,20,30)
 base2=new Ground(450,570,20,30)
  block1=new Box(330,235)
  block2= new Box(360,235)
  block3=new Box(390,235)
  block4=new Box(420,235)
  block5=new Box(450,235)
  block6=new Box(360,195)
  block7=new Box(390,195)
  block8=new Box(420,195)
  block9 =new Box(390,155)

  //polygon1= createSprite(50,200,20,10)
  //polygon1.addImage(polygonImg)
  //polygon1.scale = 0.13;

  polygon1= Bodies.circle(50,200,20)
  World.add(world,polygon1)

  

  slingShot= new SlingShot(this.polygon1,{x:100,y:200})



 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  background("black")
  //camera.zoom=camera.zoom+1
 // background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 imageMode (CENTER)
 image (polygonImg,polygon1.position.x,polygon1.position.y,30,30)
 
  
//   for (i=0;i<circles.length;i++)
// {
// 	circle(circles[i], height/2,20)
// }
// if(camera.position.x%width===0)
// {
// 	circles.push(camera.position.x+width/2)
// }
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 //base1.display();
 slingShot.display();
 base2.display();
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
 block7.display();
 block8.display();
 block9.display();
 

 drawSprites();
}

//function keyPressed ()
//{
  //if(keyCode === RIGHT_ARROW)
  //{
   // if(keyIsDown(RIGHT_ARROW))
    //{
      //camera.position.x=camera.position.x+10;
    //}
 // }
//}

function mouseDragged(){
Matter.Body.setPosition(this.polygon1,{x:mouseX,y:mouseY})
}


function mouseReleased(){
  slingShot.fly();
}
