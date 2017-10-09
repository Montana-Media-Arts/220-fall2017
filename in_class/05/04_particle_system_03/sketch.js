
var emitter;

function setup() {
    createCanvas( windowWidth, windowHeight );

    loc = createVector( width/2, height*0.75 );
    emitter = new Emitter( loc );
}

function draw() {
    background( 0 );

    emitter.frame();
}
