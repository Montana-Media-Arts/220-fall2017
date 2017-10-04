var value;
var amp = 200;
var t = 0;
var freq = 0.1;
var delta;
var fr = 60;
var wave = [];
var waveNum = 100;
var waveObjSize;
var phaseAmt = 1;


function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate(fr);


    waveObjSize = width*2/waveNum;

    amp = height / 3;


}


function draw() {
    background( 255 );


    translate( 0, height/2 );


    fill( 'rgba(99, 190, 241, 0.67)' );


    for (var i = 0; i < waveNum; i++) {
        // value = amp * sin( TWO_PI * t );
        value = amp * sin( TWO_PI * t + (i/waveNum)*phaseAmt*TWO_PI );
        ellipse( waveObjSize/2 * i + waveObjSize/2, value, waveObjSize );
    }

    delta = freq/fr;
    t += delta;

    freq = map( mouseX, 0, width, 0, 20 );
    phaseAmt = map( mouseY, 0, height, 0.1, 4 );
}
