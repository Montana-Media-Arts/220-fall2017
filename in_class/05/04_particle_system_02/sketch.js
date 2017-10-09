/* For Monday; Create a Particle Emitter class and array */


var particle;
var ps = [];
var loc;
var vel;


function setup() {
    createCanvas( windowWidth, windowHeight );

    loc = createVector( 0, height );
    vel = createVector( 0, 0 );

}


function draw() {
    background( 0 );

    // var acc = createVector( 0.001, -0.01 );
    // vel.add(acc);
    // loc.add(vel);
    loc = createVector( mouseX, mouseY );

    var pvel = createVector( random(-2, 2), random(-2, 2) );
    pvel.add(vel);

    ps.push( new Particle( loc, pvel ) );


    for (var i = ps.length-1; i >= 0; i--) {
        var dead;
        dead = ps[i].frame();
        if( dead ) {
            ps.splice(i, 1);
        }
    }


    fill( 'white');
    text( ps.length, 10, 10 );
}
