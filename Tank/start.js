var button = {
  
  x : 300,
  y : 450,
  w : 110,
  h : 70,
  
  show : function(){
    fill(207);
    noStroke();
  rect(this.x,this.y,this.w,this.h);    
  }
  
}



function menu(){
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("p5*", 330, 330);
  textSize(25);
  text("Click to start", 360, 375);


}




function mousePressed(){
  if(mouseX > button.x && mouseX < button.x + button.w && mouseY > button.y && mouseY < button.y + button.h){
    console.log("worked");
    state = 1;
  }
}
