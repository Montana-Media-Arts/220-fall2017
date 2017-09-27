// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var m1, m2;
var gravity;
var force;

function setup() {
  createCanvas(640, 360);
  m2 = new Mover();
  m1 = new Attractor();
  gravity = 1;
}

function draw() {
  background(51);

  // find r or the vector between the two objects

  force = m1.attract(m2, gravity);

  // console.log(force);

  m2.applyForce(force);


  m1.display();
  m2.update();
  m2.display();
  m2.checkEdges();

}
