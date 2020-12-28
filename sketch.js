
function setup() {
  createCanvas(450,450);
  angleMode(DEGREES);
}

function draw() {

  background(0); 

translate(200,200)
rotate (-90);

  var hr = hour();
  var mn = minute();
  var sc = second();
  
  //arcs

  strokeWeight(8);
  stroke("red");
  noFill();
  var scAngle = map(sc,0,60,0,360);
  arc(0,0,300,300,0,scAngle);
  
  stroke("green");
  var mnAngle = map(mn,0,60,0,360);
  arc(0,0,280,280,0,mnAngle);
  
  stroke("blue");
  var hrAngle = map(hr%12,0,12,-0,360);
  arc(0,0,260,260,0,hrAngle);
  
  //lines

  push();
  rotate(scAngle);
  stroke("red");
  line(0,0,100,0);
  pop();
  
  
  push();
  rotate(mnAngle);
  stroke("green");
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,50,0);
  pop();
  

  }