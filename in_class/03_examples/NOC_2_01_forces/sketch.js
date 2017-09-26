// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var m;
var wind;
var gravity;

function setup() {
  createCanvas(640, 360);
  m = new Mover();
  wind = createVector(0.01, 0);
  gravity = createVector(0, 0.1);
}

function draw() {
  background(51);

  m.applyForce(wind);
  m.applyForce(gravity);


  m.update();
  m.display();
  m.checkEdges();

}
