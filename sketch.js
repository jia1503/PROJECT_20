var car,wall,car2,wall2,car3,wall3;
var speed, speed1,speed2, weight,weight1,weight2;

function setup(){
 createCanvas(1600, 400);

 speed=random(55,90); 
 speed1=random(55,90); 
 speed2=random(55,90); 
 
 weight=random(400,1500);
 weight1=random(400,1500);
 weight2=random(400,1500);

 car=createSprite(50, 100, 50,50);
 car.velocityX = speed;
 car.shapeColor=color(255); 

 car1=createSprite(100, 200, 50,50);
 car1.velocityX = speed1;
 car1.shapeColor=color(165); 

 car2=createSprite(150, 300, 50,50);
 car2.velocityX = speed2;
 car2.shapeColor=color(50); 

 wall=createSprite(1500,100, 60, 80); 
 wall.shapeColor=color(80,80,80)

 wall1=createSprite(1500,200, 60, 80); 
 wall1.shapeColor=color(80,80,80)

 wall2=createSprite(1500,300, 60, 80); 
 wall2.shapeColor=color(80,80,80)
 }

function draw() {

 background(0);

 if(wall.x-car.x < (car.width+wall.width)/2) {
  car.velocityX=0; 
  var deformation=0.5 * weight * speed* speed/22500;
  if(deformation>180){
    car.shapeColor=color(255,0,0);
  } 
    if(deformation<180 && deformation>100) {
      car.shapeColor=color(230,230,0); 
    } 
      if(deformation<100) {
        car.shapeColor=color(0,255,0); 
      }
    }  

 if(wall1.x-car1.x < (car1.width+wall1.width)/2) {
      car1.velocityX=0; 
      var deformation=0.5 * weight * speed* speed/22500;
      if(deformation>180){
        car1.shapeColor=color(15,0,0);
      } 
        if(deformation<180 && deformation>100) {
          car1.shapeColor=color(230,255,0); 
        } 
          if(deformation<100) {
            car1.shapeColor=color(230,0,0); 
          }
        }  

if(wall2.x-car2.x < (car2.width+wall2.width)/2) {
          car2.velocityX=0; 
          var deformation=0.5 * weight * speed* speed/22500;
          if(deformation>180){
            car2.shapeColor=color(255,0,0);
          } 
            if(deformation<180 && deformation>100) {
              car2.shapeColor=color(230,230,0); 
            } 
              if(deformation<100) {
                car2.shapeColor=color(0,255,0); 
              }
            }  
       
  drawSprites();
}
