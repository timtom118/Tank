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
  createCanvas(700,700);
  angleMode(DEGREES);
  background(234,78,91);
  for (var i = 0; i < 4; i++){
  ps[i] = new P5();
}
print(ps);

}

function draw() {
  if (state === 0){
  menu();
}if(state === 1){
  screen();
  t.show();
  for (var i = 0; i < ps.length; i++){
  ps[i].show();
  control();
  border();
 
  }
}
if(state === 3){
  right();
  control();
  t.show();
}else{
  
}

}


function screen(){
  background(100);

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
  
  

function border(i,x){
  if(t.x >= width){
    t.x = 0;
    state = 3;
  }
  else if(t.x <= 0){
    t.x = width;
   state = 2;
  }
  if(t.x >= P5.x){
    console.log("hello");
  }
}



function P5(){
 
  this.x = random(100, width),
  this.y = random(150,height),
  this.w = 20,
  this.h = 30,
  this.show = function(){
  stroke(255,0,0);
  fill(255,0,0);
  rect(this.x,this.y,this.w,this.h);
  
}
}

function right(){
  background(144,0,0);
t.y = t.y = 0;
  
}



  



