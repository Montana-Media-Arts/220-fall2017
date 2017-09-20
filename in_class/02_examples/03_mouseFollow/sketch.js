

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

    // this.acc = createVector(0,0);



}

Mover.prototype.display = function() {
    text(this.acc, 10, 10);

    push();
    translate(this.loc.x, this.loc.y);

    triangle(-10,-10,10,-10,0,10);
    pop();

};

Mover.prototype.update = function() {

    this.mouse = createVector(mouseX,mouseY);
    this.acc = p5.Vector.sub(this.mouse, this.loc);
    // this.acc.normalize();
    this.acc.setMag(0.2);
    // this.acc.rotate(PI);




    this.velocity.add(this.acc);

    // limit the max velocity
    this.velocity.limit(10);

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
