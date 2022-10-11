var r = 255;
var g = 255;
var b = 255;
var r_dec = 10
var g_dec = 10
var b_dec = 10
function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  if(r<0)
    r = 255
  
    if(g<0)
    g = 255

    if(b<0)
    b = 255
  r = r - r_dec;
  b = b - b_dec;
  g = g - g_dec;
  background(r, g, b);
  r_dec = random(10,50);
  g_dec = random(10,100);
  b_dec = random(0,100);
  console.log(r);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}