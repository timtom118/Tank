function menu(){
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("p5*", 330, 330);
  textSize(25);
  text("Click to start", 360, 375);
}
function mousePressed(){
  if(state === 0){
  state = 1;
}
  
}