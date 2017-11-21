/**
 * @Author: Michael Musick <michaelmusick>
 * @Date:   09-06-2017
 * @Email:  michael.musick@umontana.edu
 * @Last modified date: 10-23-2017
 */


// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com


// A reference to our box2d world
var world;

// A list we'll use to track fixed objects
var boundaries = [];
// A list for all of our rectangles
var boxes = [];
var bx;
var by;

function setup() {
  createCanvas(640,360);

  // Initialize box2d physics and create the world
  world = createWorld();

  // Add a bunch of fixed boundaries
  bx = [width/4, 3*width/4];
  by = [height-5, height-50];
  boundaries.push(new Boundary(bx[0],by[0],width/2-50,10));
  boundaries.push(new Boundary(bx[1],by[1],width/2-50,10));

  var b = new Box(width/2,30);
  boxes.push(b);
}

function draw() {
  background(51);

  // We must always step through time!
  var timeStep = 1.0/30;
  // 2nd and 3rd arguments are velocity and position iterations
  world.Step(timeStep,10,10);

  // Boxes fall from the top every so often
  if (random(1) < 0.2) {
    var b = new Box(width/2,30);
    boxes.push(b);
  }

  // Display all the boundaries
  for (var i = 0; i < boundaries.length; i++) {
      by[i]--;
      boundaries[i].move(bx[i], by[i]);
    boundaries[i].display();
  }

  
}
