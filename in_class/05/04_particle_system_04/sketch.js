
var emitter = [];

function setup() {
    createCanvas( windowWidth, windowHeight );

    loc = createVector( width/2, height*0.75 );

    emitter.push( new Emitter( loc ) );

}


function draw() {
    background( 0 );

    // for (var i = 0; i < emitter.length; i++) {
    //     emitter[i].frame();
    // }

    for (obj of emitter) {
        obj.frame();
    }

}


function mousePressed() {
    loc = createVector( mouseX, mouseY );
    emitter.push( new Emitter( loc ) );
}
