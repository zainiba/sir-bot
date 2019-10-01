class Bolt {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation;
    this.size = _size;
  }

  display() {
    fill(150);

    push();
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    scale(this.size);
    //hexagon
    beginShape();
    vertex(width * .78, height * .065);
    vertex(width * .82, height * .065);
    vertex(width * .84, height * .1);
    vertex(width * .82, height * .135);
    vertex(width * .78, height * .135);
    vertex(width * .76, height * .1);
    endShape(CLOSE);

    fill(80);
    ellipse(width * .8, height * .1, 15, 15);
    pop();
  }

  move() {

    this.rotation++;

    if (this.yPos <= 1 ) {
    this.yPos += 1;
    } else {
     this.yPos = -3;
    }
  }
}
