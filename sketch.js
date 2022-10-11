var r = 255;
var g = 255;
var b = 255;
var r_dec = 10
var g_dec = 10
var b_dec = 10
var card_test;
//copas espada, ouro e pau
var card_image;

function preload(){
  card_image = loadImage("./PNG/black/Clovers_3_black.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  card_test = new Card(mouseX,mouseY,1);

}

function draw() {
  card_test.body.x = mouseX;
  card_test.body.y = mouseY;
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
 // r_dec = random(10,50);
   //g_dec = random(10,100);
  //b_dec = random(0,100);
  console.log(r);
  drawSprites();
  

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}