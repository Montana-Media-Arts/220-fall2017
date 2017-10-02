/* FREAKING AWESOME! */


var objs = [];

function setup() {
    createCanvas(windowWidth,windowHeight);
    background('black');

    objs.push(
        new Spiral( width/2, height/2, 10, 64, 'clockwise', 'rgba(207, 52, 221, 0.69)', 'rgba(163, 128, 57, 0.76)' )
    );



    // objs.push(
    //     new Spiral( 3*width/4, height/2, 10, 64, 'counter', 'rgba(52, 221, 170, 0.69)' )
    // );
}

function draw() {

    for (var i = 0; i < objs.length; i++) {
        objs[i].frame();
    }

}




function Spiral( x, y, diam, rot_delta, dir, color1, color2 ) {
    this.pos = { r: 0, theta: 0 };
    this.loc = createVector(x, y);
    this.cart = {x1: 0, x2: 0, y: 0};
    this.diam = diam;
    this.delta = rot_delta;
    this.dir = dir;
    this.color1 = color1;
    this.color2 = color2;
}

Spiral.prototype.frame = function(){
    this.update();
    this.display();
};


Spiral.prototype.update = function(){
    this.cart.x1 = this.pos.r * cos(this.pos.theta);
    this.cart.x2 = (this.pos.r-this.diam) * cos(this.pos.theta);
    this.cart.y = this.pos.r * sin(this.pos.theta);

    this.pos.r += (this.diam*2) / (this.delta*2);

    if (this.dir == 'clockwise') {
        this.pos.theta += PI/this.delta;
    } else {
        this.pos.theta -= PI/this.delta;
    }

};

Spiral.prototype.display = function(){
    push();

    translate(this.loc.x, this.loc.y);
    // line( 0, 0, cart_coor.x, cart_coor.y );
    noStroke();
    fill(this.color1);
    ellipse( this.cart.x1, this.cart.y, this.diam );
    fill(this.color2);
    ellipse( this.cart.x2, this.cart.y, this.diam );

    pop();
};
