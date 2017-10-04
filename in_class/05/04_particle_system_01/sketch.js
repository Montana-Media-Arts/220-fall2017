var particle;

function setup() {
    createCanvas( windowWidth, windowHeight );

    var loc = createVector( random(width), height * 0.2 );
    var vel = createVector( 0, 0 );

    particle = new Particle( loc, vel );

}


function draw() {
    background( 0 );

    particle.frame();
}
