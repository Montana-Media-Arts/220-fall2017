var thing;

function setup() {
    createCanvas(windowWidth, windowHeight);
    thing = new Thingy();
}

function draw () {
    background('black');

    thing.frame();
}



/********************************/
/* Thingy */
/********************************/

function Thingy() {
    this.loc = createVector(width/2,height/2);
    this.vel = createVector(0,0);
    this.angle = 0;
}

Thingy.prototype.frame = function(){
    this.update();
    this.display();
};


Thingy.prototype.update = function(){

    // move the thingy
    this.acc = createVector(mouseX, mouseY );
    this.acc.sub(this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
    this.vel.add(this.acc);
    this.vel.limit(5);
    this.loc.add(this.vel);

    // find the thingy's angle
    // this.angle = atan2(this.acc.y, this.acc.x);
    this.angle = this.vel.heading();


};


Thingy.prototype.display = function(){

    push();
    translate(this.loc.x, this.loc.y);
    rotate(this.angle);
    fill( 'rgb(41, 249, 255)' );
    noStroke();
    rectMode(CENTER);
    rect( 0, 0, 50, 40 );
    triangle(20, -30, 20, 30, 60, 0);
    pop();

};
