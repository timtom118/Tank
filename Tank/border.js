function border(i,x){
  if(t.x >= width){
    t.x = 0;
    state = 2;
  }
  else if(t.x <= 0){
    t.x = width;
   state = 1;
  }
  if(t.x >= P5.x){
    console.log("hello");
  }
  if((state == 2) && (t.x <= width)){
    state = 2;
  }
  if((t.x <= 0) && (state = 2)){
    state = 1;
  }
  
}
