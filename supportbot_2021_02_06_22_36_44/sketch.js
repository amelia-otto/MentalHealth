let mode=1;
let choice;
let rant = "";
let rant2="";
let rant3='';
let rant4="";
let rant5="";

function setup() {
  createCanvas(900, 600);
}
function main(){
    if(mode===1){
      background(220);
      noStroke();
      fill(255);
      rect(40, 60, width-80, 100, 20);
      triangle(410, 140, 440, 140, 410, 200);
      fill(0);
      textSize(20);
      text("Hi there! I'm Zoomba, your virtual student support bot. What's been troubling you lately?", 50, 120);
      text("Click anywhere to continue", 500, 450)
      drawZoomba(350, height/2+100);
    }
  else if(mode===2){
    let z = 250;
    background(220);
    drawZoomba(150, height/2+100);
    noStroke();
      fill(255);
      rect(40, 60, width-250, z, 20);
      triangle(80, z+40, 110, z+40, 80, z+100);
      fill(0);
      textSize(20);
    text("1. Seeking help or connecting with teachers virtually", 100, 110)
      text("2. Staying engaged and motivated during virtual classes", 100, 150)
      text("3. Excessive screen time", 100, 190)
      text("4. Anything else you would like to talk about", 100, 230)
      text("5. Restart", 100, 270)
    text("Please choose:", 350, 370)
    fill(255, 0, 0);
    circle(340, 450, 80);
    fill(255, 255, 0);
    circle(430, 450, 80);
    fill(0, 255, 0);
    circle(520, 450, 80);
    fill(0, 0, 255);
    circle(610, 450, 80);
    fill(255, 0, 255);
    circle(700, 450, 80);
    fill(0);
    textSize(50);
    for(let i = 0; i<5; i++){
      text(str(i+1), 325+i*90, 465);
    }
  }
  else if(mode==3){
    let z = 270;
    background(220);
    drawZoomba(350, height/2+110);
    noStroke();
      fill(255);
      rect(40, 60, width-250, z, 20);
      triangle(410, z+40, 440, z+40, 410, z+100);
      fill(0);
    textSize(16);
    if(choice==1){
     text("Building new relationships online and reaching out to your teachers can \ndefinitely be hard. Be sure to take advantage of any office hours your \nteachers may be offering. Emailing is also an effective way to get to \nknow your teachers, if you feel more comfortable with nonverbal \ncommunication. Participation in class, as well, can be a great opportunity \nto interact with your teacher and show them that you are focused. If \nyou're having trouble asking for help in class, remember that other \nstudents may also have the same question that you have! However, \nstaying behind after class to check in with your teacher individually is \nalso valid. Remember that you are not alone, and it is likely that your \npeers are experiencing similar struggles.", 100, 100);
      textSize(20);
    text("Click anywhere to continue", 450, 500)
    }
    else if(choice==2){
      text("Virtual school is a very new and different experience, and it is okay if \nyou are struggling with that change! Staying focused in classes and \nmeeting assignment deadlines is much more difficult to manage now \nthat your entire academic experience revolves around your computer, \nand it is understandable if you are having trouble with this. You may \nfind it helpful to remove any distractions from your workspace, such \nas a cell phone. Making use of a planner or a calendar to keep track \nof assignments is also a great way to hold yourself accountable! Keep \nin mind that you are not alone in this experience and that your peers \nare all adjusting to a new form of learning. Lack of motivation to learn \nis very valid given our current situation.", 100, 100);
      textSize(20);
    text("Click anywhere to continue", 450, 500)
    }
    else if(choice==3){
      textSize(18);
       text("It is completely understandable that you are having trouble adjusting \nto the increased amount of screen time. It can be exhausting and \nstraining for your eyes, and millions of teenagers nationwide are \nfeeling the same thing. Although it is difficult to regulate your screen \ntime, it can be helpful to do assignments by hand when possible and \nto take screen breaks between classes to rest your eyes. Please \nremember to take care of yourself as needed, and to remember that \nyou are not alone in this struggle.", 100, 120);
      textSize(20);
    text("Click anywhere to continue", 450, 500)
    }
    else if(choice==4){
      mode=4;
    }
    else{
      mode=1;
    }
  }
  else if(mode==4){
    background(220);
      noStroke();
      fill(255);
      rect(40, 60, width-80, 100, 20);
      triangle(80, 140, 110, 140, 80, 200);
      fill(0);
      textSize(20);
      text("Feel free to use this space to vent about anything at all that is on your mind! \nOr you can just keysmash ;)", 100, 100);
    drawZoomba(150, height/2+100);
    fill(255);
    rect(300, 200, 550, 350, 20);
    fill(0);
    text(rant.toUpperCase(), 345, 260);
    text(rant2.toUpperCase(), 345, 320);
    text(rant3.toUpperCase(), 345, 380);
    text(rant4.toUpperCase(), 345, 440);
    text(rant5.toUpperCase(), 345, 500);
  }
  else if(mode==5){
    background(220);
    drawZoomba(350, height/2);
    noStroke();
      fill(255);
      rect(40, 60, width-160, 100, 20);
      triangle(410, 140, 440, 140, 410, 200);
      fill(0);
      textSize(20);
    text("Thanks for sharing :) Feel free to check out the resources page for \nmore support! You are not alone.", 100, 100);
    beginShape();
for( let i = 0; i <= 100000; i++ ){
let t = i * 0.001 * PI;
let x = 16 * sin(t)**3;
let y = 13 * cos(t) - 5 * cos(2 * t) - 2 * cos(3 * t) - cos(4 * t);
let xx = x * -5 + 600;
let  yy = y * -5 + 350;
fill(255,0,0);
vertex(xx,yy);
    }
endShape(CLOSE);
    fill(0);
    text("Click anywhere to restart", 300, 530);
  }

}

function drawZoomba(x, y){
  fill(38, 38, 37);
  ellipse(x, y, 100, 100);
  fill(92, 247, 244);
  rect(x-38, y-20, 75, 20, 10);
// This is the robots head.

  fill(38, 38, 37);
  quad(x-38, y+50, x+38, y+50, x+25, y+150, x-25, y+150);
// This is the robots torso.

  fill(38, 38, 37);
  triangle(x-38, y+50, x-43, y+115, x-58, y+85);
  fill(38, 38, 37);
  triangle(x+38, y+50, x+43, y+115, x+58, y+85);
  // This is the robots left and then right arm.
}
function draw() {
  background(220);
  main();
  
}

function mouseClicked(){
  if(mode===1){
    mode=2;
  }
  else if(mode===2){
    let c = get(mouseX, mouseY)
    let crgb = color(c);
    let red= color(255, 0, 0)
    let yellow = color(255, 255, 0);
    let green = color(0, 255, 0);
    let blue = color(0, 0, 255);
    let purple = color(255, 0, 255);
    if(crgb.toString()===red.toString()){
      choice=1;
      mode=3;
    }
    else if(crgb.toString()===yellow.toString()){
      choice = 2;
      mode=3;
    }
    else if(crgb.toString()===green.toString()){
      choice=3;
      mode=3;
    }
    else if(crgb.toString()===blue.toString()){
      choice = 4;
      mode=3;
    }
    else if(crgb.toString()===purple.toString()){
      choice=5;
      mode=3;
    }
    else{
      
    }
  }
  else if(mode==3){
    mode=4;
  }
  else if(mode==5){
    mode=1;
  }
}

function keyPressed(){
  if(mode===4){
  let x = 35;
  if(rant.length<x){
    if(keyCode==BACKSPACE||keyCode==SHIFT){
      
    }
    else if(keyCode == RETURN||keyCode==ENTER){
      mode=5;
    }
    else{
    rant+=key;
    }
  }
  else if(rant2.length<x){
    if(keyCode==BACKSPACE||keyCode==SHIFT){
      
    }
    else if(keyCode == RETURN||keyCode==ENTER){
      mode=5;
    }
    else{
    rant2+=key;
    }
  }
  else if(rant3.length<x){
    if(keyCode==BACKSPACE||keyCode==SHIFT){
      
    }
    else if(keyCode == RETURN||keyCode==ENTER){
      mode=5;
    }
    else{
    rant3+=key;
    }
  }
  else if(rant4.length<x){
    if(keyCode==BACKSPACE||keyCode==SHIFT){
      
    }
    else if(keyCode == RETURN||keyCode==ENTER){
      mode=5;
    }
    else{
    rant4+=key;
    }
  }
  else if(rant5.length<x){
    if(keyCode==BACKSPACE||keyCode==SHIFT){
      
    }
    else if(keyCode == RETURN||keyCode==ENTER){
      mode=5;
    }
    else{
    rant5+=key;
    }
  }
  else{
    mode=5;
  }
}
}
