
var botao;
var angle=60;
var girador, girador1, girador2, girador3 ;

//Crie um namespace (espaço de nomes) para Mecanismo
const Engine = Matter.Engine;
//Crie um namespace (espaço de nomes) para Mundo
const World = Matter.World;
//Crie um namespace (espaço de nomes) para Corpos
const Bodies = Matter.Bodies;
//Crie um namespace (espaço de nomes) para Corpo
const Body = Matter.Body;




function setup() {
  createCanvas(400,400);
  //os blocos das linhas 22 e 24 devem ficam sempre acima dos outros
  //crie o mecanismo
  engine = Engine.create();
  //Adicione mundo ao mecanismo
  world = engine.world;

  botao = createImg ("up.png");
  botao.position (20,30);
  botao.size (50,50);
  botao.mouseClicked(VForce);


  girador = new Ground(50, 370, 50, 50);
  girador1 = new Ground(100, 370, 50, 50);
  girador2 = new Ground(150, 370, 50, 50);
  girador3 = new Ground(200, 370, 50, 50);



  

  
   var ball_options = {
    restitution: 0.95,
    frictionAir: 0.01
  }
   
   var ground_options ={
     isStatic: true
   }
  
  
  //crie o solo
  ground = Bodies.rectangle (200,400, 400,20,ground_options);

  ground1 = Bodies.rectangle (100,300, 20,20,ground_options);
  //adicione ao mundo
  World.add (world, ground);
  World.add(world, ground1);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  


  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  //escreva uma função de retângulo para exibir o solo.
  fill ("black");
  rect ( ground.position.x, ground.position.y, 400, 20);
  //rect ( ground1.position.x, ground1.position.y, 70, 10);


  Matter.Body.rotate(ground1, angle);

  push();
  translate( ground1.position.x, ground1.position.y,);
  rotate(angle);
  rect (0, 0, 100 ,20);
  pop();
  angle+= 0.1;

  girador.show();
  girador1.show();
  girador2.show();
  girador3.show();
  Engine.update(engine);

  
}

function VForce(){
  Matter.Body.applyForce(ball,{x:0, y:0}, {x:0, y:-0.05})
}