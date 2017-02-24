console.log("debug");

var road = [];

function Stripes(){
  
  this.x = random(1 * 100)
  this.y = 390,
  this.w = 30,
  this.h = 15,
  this.show = function(){
    stroke(255);
    fill(255);
    rect(this.x,this.y,this.w,this.h);
  }
  
}

var grass;

var state = 0;

var ps = [];

var bullets = [];

var t = {
  x:50,
  y:50,
  w:20,
  h:30,
  
  show: function(){
  stroke(255);
  fill(255);
  rect(this.x,this.y,this.w,this.h);
 
  }
};


function setup() {
  grass = loadImage("grass.png");
  createCanvas(700,700);
  angleMode(DEGREES);
  background(234,78,91);
  for (var i = 0; i < 4; i++){
  ps[i] = new P5();
}
  for(var r = 0; r < 8; r++){
    road[r] = new Stripes();
  }
print(ps);
print(road);

}

function draw() {
  if (state === 0){
  menu();
}if(state === 1){
  screen();
  t.show();
  for (var i = 0; i < ps.length; i++){
  ps[i].show();
  ps[i].move();
  }
  control();
  border();
  for(var r = 0; r < road.length; r++){
  road[r].show();
  }
}
if(state === 2){
  right();
  control();
  t.show();
  for(var j = 0; j < road.length; j++){
  road[j].show();
  }
print(road);
}

}


function screen(){
  background(grass);
    noStroke();
  fill(130,144,133);
  rect(0,350,700,100);

}

function mousePressed(){
  if(state === 0){
  state = 1;
}
  
}



  function control(){
  if (keyIsDown(65))    // "a" key
    t.x-=3;
   
   
    

  if (keyIsDown(68))    //  "d" key
    t.x+=3;
 if (keyIsDown(83))    // "w" key
    t.y+=3;

  if (keyIsDown(87))    //  "s" key
    t.y-=3;
 
  }
  
  





function P5(){
 
  this.x = random(50, width),
  this.y = random(20,height),
  this.w = 20,
  this.h = 30,
  this.show = function(){
  stroke(255,0,0);
  fill(255,0,0);
  rect(this.x,this.y,this.w,this.h);
   
}
  this.move = function(){
    this.y = this.y +=0.04;
  }
}





  



