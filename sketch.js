let earsPop;
let mic;
let micLevel;
let value = 255;
let head = 200;
let emerg = false;
let colorTeeth1;
let colorTeeth2;
let colorTeeth3;
let colorTeeth4;
let bolt1;
let bolt2;
let bolt3;
let bolt4;
let eye = 35;

function setup() {

  createCanvas(500, 500);
  noStroke();

  //the size changes the position of the bolts why????????
  bolt1 = new Bolt(width * .1, height * .1, 10, .5);
  bolt2 = new Bolt(width * .1, height * .2, -20, 1.6);
  bolt3 = new Bolt(width * .3, height * .1, -10, .7);
  bolt4 = new Bolt(width * .3, height * .3, 20, 1);

}

function draw() {
  clear();
  background(20, 30, 50);
  //making ears pop
  micLevel = mic.getLevel();
  earsPop = map(micLevel, 0, .3, 1, 48);

  // bolt1.display();
  // bolt2.display();
  bolt3.display();
  bolt4.display();

  // bolt1.move();
  // bolt2.move();
  bolt3.move();
  bolt4.move();


  // drawBolt();
  drawEar(earsPop);
  drawAnt();
  drawHead();
  drawMouth();
  drawEye();
  drawPupil();
  //text emergency
  if (emerg == true) {
    fill(128 + sin(frameCount * 0.1) * 128);
    text('EMERGENCY', width * .55, height * .1);
  }

    //Changes antenna color6
  value = value + 3;
  if (value > 255) {
    value = 50;
  }
}

function mouseMoved() {
  if (mouseMoved) {
    eye = eye + .5;
  }
  if (eye > 60) {
    eye = 1;
  }
}



function mousePressed() {
  if (mousePressed) {
    mic = new p5.AudioIn()
    mic.start();
    emerg = !emerg;

  }

  //Changes head color
  if (mousePressed) {
    head = head + 70;
    if (head > 255) {
      head = 0;
    }
  }

}




function drawEar(xpos) {
  fill(190)
  //robot left ear
  rect(width * .1, height * .53, 25, 25);
  rect(width * .07 - xpos, height * .52, 15, 35);
  //robot right ear
  rect(width * .85, height * .53, 25, 25);
  rect(width * .90 + xpos, height * .52, 15, 35);

}

function drawAnt() {
  //robot antenna
  fill(84, 85, 90);
  // circle(width * .45, height * .06, 25);

  beginShape();
  vertex(width * .45, height * .08);
  vertex(width * .47, height * .07);
  vertex(width * .51, height * .12);
  vertex(width * .47, height * .18);
  vertex(width * .5, height * .25);
  vertex(width * .47, height * .25);
  vertex(width * .44, height * .18);
  vertex(width * .48, height * .12);
  endShape(CLOSE);
}

function drawHead() {
  fill(value, 0, 0);
  circle(width * .45, height * .06, 25);
  //robot head
  fill(head, head, head);
  beginShape();
  vertex(width * .1, height * .25);
  vertex(width * .9, height * .25);
  vertex(width * .8, height * .9);
  vertex(width * .2, height * .9);
  endShape(CLOSE);
  //robot neck
  rect(width * .43, height * .9, width * .15, height * .09);
}

function drawMouth() {
  if (micLevel < .02) {
    colorTeeth1 = 255;
    colorTeeth2 = 50;
    colorTeeth3 = 50;
    colorTeeth4 = 50;
  } else if (micLevel < .03) {
    colorTeeth1 = 50;
    colorTeeth2 = 255;
    colorTeeth3 = 50;
    colorTeeth4 = 50;
  } else if (micLevel < .05) {
    colorTeeth1 = 50;
    colorTeeth2 = 50;
    colorTeeth3 = 255;
    colorTeeth4 = 50;
  } else if (micLevel < .07) {
    colorTeeth1 = 50;
    colorTeeth2 = 50;
    colorTeeth3 = 50;
    colorTeeth4 = 255;
  }

  //robot mouth
  fill(colorTeeth1);
  rect(width * .33, height * .65, 15, 89);
  rect(width * .63, height * .65, 15, 89);
  fill(colorTeeth2);
  rect(width * .38, height * .65, 15, 89);
  rect(width * .58, height * .65, 15, 89);
  fill(colorTeeth3);
  rect(width * .43, height * .65, 15, 89);
  rect(width * .53, height * .65, 15, 89);
  fill(colorTeeth4);
  rect(width * .48, height * .65, 15, 89);
}

function drawEye() {
  //robot left eye
  fill(145, 145, 145);
  circle(width * .36, height * .47, 100);

  //robot right eye
  circle(width * .63, height * .47, 100);

  //eye whites left 1st
  fill(255);
  circle(width * .36, height * .47, 85);
  circle(width * .63, height * .47, 85);
}

function drawPupil() {
  //pupil left 1st
  fill(51, 51, 51);
  circle(width * .37, height * .48, eye);
  circle(width * .64, height * .48, eye);
}
