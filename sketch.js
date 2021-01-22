var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle
var count=0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
   
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(100,180,600)
  text(50,90,600)
  text(25,40,600)
  text(200,250,600)
  text(300,340,600)
  text(400,430,600)
  text(500,520,600)
  text(600,600,600)
  text(700,680,600)
  text(800,760,600)


  Engine.update(engine);
  ground.display();
 
  if ( gameState ==="end") {
    textSize(100);
    text("GameOver", 150, 250);
  }
  
  for (var k = 0; k < divisions.length; k++) {
      //console.log("K="+k);
      divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {    
      plinkos[i].display();
  }

  if(particle!=null){
    particle.display();

    if( particle.body.position.y> 760){

        if(particle.body.position.x<80){
          score=score+25;
          particle=null;
          if(count>5){
            gameState='end';
          }

        }
        
        if(particle.body.position.x >80 && particle.body.position.x < 160){
         score=score+50
         particle=null
         if(count>5){
          gameState='end'
         }
        }

        if(particle.body.position.x >160 && particle.body.position.x < 240){
          score=score+100
          particle=null
          if(count>5){
           gameState='end'
          }
        }


        if(particle.body.position.x >240 && particle.body.position.x < 320){
          score=score+200
          particle=null
          if(count>5){
           gameState='end'
          }
        }

        if(particle.body.position.x >320 && particle.body.position.x < 400){
          score=score+300
          particle=null
          if(count>5){
           gameState='end'
          }
        }

        if(particle.body.position.x >400 && particle.body.position.x < 480){
          score=score+400
          particle=null
          if(count>5){
           gameState='end'
          }
        }

        if(particle.body.position.x >480 && particle.body.position.x < 560){
          score=score+500
          particle=null
          if(count>5){
           gameState='end'
          }

        }

        if(particle.body.position.x >560 && particle.body.position.x < 640){
          score=score+600;
          particle=null;
          if(count>5){
           gameState='end';
          }
        }

        if(particle.body.position.x >640 && particle.body.position.x < 720){
          score=score+700
          particle=null
          if(count>5){
           gameState='end'
          }
        }

        if(particle.body.position.x >720 && particle.body.position.x < 800){
          score=score+800
          particle=null
          if(count>5){
           gameState='end'
          }
        }
    }
  }


    
  
}

function mousePressed()
{
  if(gameState != 'end'){
    particle = new Particle(mouseX,10, 10,10);
    count++;
  } 
    
}