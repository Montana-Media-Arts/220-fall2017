var acc_deg = 0;
var angle = 0;
function setup() {
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(255);
    translate(width/2, height/2);


    rectMode(CENTER);

    // rotate(-PI/2);
    // rotate( radians(-90) );

    var rad = TWO_PI * ( acc_deg / 360 );
    acc_deg-= 0.001;

    angle = angle + rad;



    rotate( angle );
    rect(0, 0, 40, 40);
    line(0, 0, 0, 0 - 40);
}
