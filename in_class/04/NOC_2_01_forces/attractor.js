// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Attractor = function() {
  this.mass = 2;
  this.position = createVector(width/2, height/2);

  this.attract = function(mover, gravity) {


      var r = p5.Vector.sub(this.position, mover.position);
      var distance = r.mag();
      distance = constrain(distance, 1, 25);

      var mass = (gravity * this.mass * mover.mass) / (distance);

      r.normalize();
      r.mult(mass);

      return r;
  };

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, this.mass * 40 );
  };


};
