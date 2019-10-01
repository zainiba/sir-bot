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
    vertex(35, 32);
    vertex(65, 32);
    vertex(78, 55);
    vertex(65,80);
    vertex(35, 80);
    vertex(22, 55);
    endShape(CLOSE);

    fill(80);
    ellipse(50, 55, 20, 20);
    pop();
  }

  move() {

    this.rotation++;

    if (this.yPos <= height ) {
    this.yPos += 1;
    } else {
     this.yPos = -3;
    }
  }
}
