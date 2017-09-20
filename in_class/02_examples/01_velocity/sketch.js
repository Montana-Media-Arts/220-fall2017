

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

    this.velocity = createVector(0,1);

}

Mover.prototype.display = function() {
    translate(this.loc.x, this.loc.y);

    triangle(-10,-10,10,-10,0,10);
};

Mover.prototype.update = function() {
    this.loc.add(this.velocity);
    this.checks();
};

Mover.prototype.checks = function() {

    if (this.loc.x > width) {
        this.loc.x = 0;
    } else if (this.loc.x < 0) {
        this.loc.x = width;
    }

    if (this.loc.y > height) {
        this.loc.y = 0;
    } else if (this.loc.y < 0) {
        this.loc.y = height;
    }


};
