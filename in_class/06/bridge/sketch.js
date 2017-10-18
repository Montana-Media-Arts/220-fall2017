var world;
var bridge;

var pops = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  world = createWorld();

  bridge = new Bridge();
}

function draw() {
  background(100);
  var timeStep = 1/30;
  world.Step(timeStep, 10, 10);
  var y_max = bridge.display();

  // Display all the boxes
  for (var i = pops.length-1; i >= 0; i--) {
    pops[i].display();
    if (pops[i].done(y_max)) {
      pops.splice(i,1);
    }
  }
  console.log(pops.length);
}

function mousePressed() {
  var p = new Lollipop(mouseX,mouseY);
  pops.push(p);
}
