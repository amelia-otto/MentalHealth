let img;
let radius = 300;
let theta = 0;
let font, fontsize = 30;
let speed = 0.015;
let circles = 0;
let song;
let mode =0;
function preload(){
  song=loadSound('minuteofcalm.mp3');
  img = loadImage('calm2.jpg');
    img2 = loadImage("space.jpg");
  font = loadFont('fontt.ttf');
}
function setup() {
    createCanvas(1000, 700);
    angleModeSelected = DEGREES;
    textFont(font);
    textAlign(CENTER, CENTER);
}

function draw() {
  if(mode==0){
    image(img2, 0, 0, 1000, 700);
    fill(255);
    textSize(50);
    text("Welcome to the Meditate Space!", width/2, height/2-100);
    textSize(30);
    text("Put some headphones in and just take a minute to breathe.", width/2, height/2)
    textSize(40);
    fill(0);
    text("Press SHIFT To Begin", width/2, height/2+300);
  }
  else if(mode==1){
    background(149, 208, 237);
    image(img, 0, 0, 1000, 700);
    let radiusC = radius / 2 + 20;
    noFill();
    strokeWeight(7);
    stroke(248, 237, 235);
    arc(width / 2, height / 2, radius, radius, 0, PI);
    stroke(252, 213, 206);
    arc(width / 2, height / 2, radius, radius, PI , 2 * PI);
    noStroke();
    fill(248, 222, 126);  
    ellipse(width/2 + radiusC*cos(theta), height/2 +   radiusC*sin(theta), 20, 20);
    theta += speed;
    if(theta > 0 && theta < PI-0.01){
      radius += 0.8;
      fill(19, 16, 13);
      fontsize += 0.1;
      textSize(fontsize);
      text('Breathe In', width / 2, height / 2);
    }
    if (theta > PI + 0.01 && theta < 2 * PI){
      radius -= 0.8;
      fill(39, 36, 53);
      fontsize -= 0.1;
      textSize(fontsize);
      text('Breathe Out', width / 2, height / 2);
    }
    if(theta > 2*PI){
      theta = 0;
    }
    if(song.isPlaying()==false){
      mode=2;
      }
}
  else{
    background(0);
    image(img2, 0, 0, img.width, img.height);
    fill(255);
    textSize(55);
    text("Good job breathing!", width/2, height/2-100);
    fill(0);
    textSize(21);
    text("Feel free to refresh and breathe some more or check out our student support bot if you need.", width/2, height/2+200)
  }
}
function mouseClicked(){
  if(speed == 0.02){
    speed = 0.015;
  }
  else{
    speed = 0.015;
  }
}
function keyPressed(){
    if(keyCode==SHIFT){
      mode=1;
      song.play();
    }
  }
