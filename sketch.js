function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  
  r = map(mouseX,0,800,0,255)
  g = map(mouseY,0,400,0,255)
  b = map(mouseX,0,400,0,255)
  background(r,g,b)
}
