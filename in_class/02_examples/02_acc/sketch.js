

var mover;

function setup() {
    createCanvas(windowWidth,windowHeight);

    mover = new Mover();

}

function draw() {
    background('white');
    mover.update();
    mover.display();
}



function Mover() {
    this.loc = createVector(width/2,height/2);

    this.velocity = createVector(0,0);

    this.acc = createVector(0.1,0.002);

}

Mover.prototype.display = function() {
    text(this.velocity.mag(), 10, 10);

    push();
    translate(this.loc.x, this.loc.y);

    triangle(-10,-10,10,-10,0,10);
    pop();

};

Mover.prototype.update = function() {

    this.velocity.add(this.acc);

    // limit the max velocity
    this.velocity.limit(20);

    this.loc.add(this.velocity);

    this.checks();
};

Mover.prototype.checks = function() {

    if (this.loc.x > width) {
        this.loc.x = 0;
    } else if (this.loc.x < 0) {
        this.loc.x = width-1;
    }

    if (this.loc.y > height) {
        this.loc.y = 0;
    } else if (this.loc.y < 0) {
        this.loc.y = height-1;
    }

    if (this.velocity.mag() > 19) {
        this.acc.rotate(PI);
    }

};
