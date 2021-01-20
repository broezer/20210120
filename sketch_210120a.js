// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(126, 126, 126);
  c2 = color(242, 139, 151);
  c3 = color(240,240,240);
}


function draw() {
    setGradient( 0, 0, width *  0.5, height, c1, c2, c3);
    setGradient( width * 0.5 , 0, width *  0.5, height, c3, c2, c1);
    
    push();
    
    translate(width * 0.825, height * 0.15);
    rotate(HALF_PI/2);
    //setGradient( 0 , 0, width * 0.01 , height , c1, c3, c2);
    pop();
    
    
    setCircle( 0, 0 ,  width , c1, c2, c3);
    setCircle( width, width ,  width, c3, c2, c1);
    
    
    save("20210120.png");
    noLoop();
}

function setGradient(x, y, w, h, c1, c2, c3) {
  noFill();
  
  //Square
  // Top to bottom gradient
  for (let i = y; i <= y + h; i++) {
    let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    
    stroke(c);
    line(x, i, x + w, i);
    
     if ( i <= (y + h) - ((h/2))){
      stroke(c);
      line(x, i, x + w, i);
    }else{
      stroke(p);
      line(x, i, x + w, i);
    }
     
  }
  

  
}


function setCircle(x, y, d, c1, c2, c3){
  noFill();
  let u = 100;
  //translate( d*0.6, d*0.6);
  for (let i=0; i<u; i++) {
   let col = lerpColor(c1, c2, (i/u)*2 );
   let col02 = lerpColor(c2, c3, ((i - (u/2))/(u/2)));
   let a = lerp(PI, 0, i/u);
   
   
   if ( i <= u/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

   }

}
