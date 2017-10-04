var value;
var amp = 100;
var t = 0;
var freq = 0.5;
var delta;
var fr = 60;


function setup() {
    createCanvas( windowWidth, windowHeight );
    frameRate(fr);

    delta = freq/fr;
}


function draw() {
    background( 255 );



    value = amp * sin( TWO_PI * t );
    console.log(value);
    t += delta;

    translate( width/2, height/2 );
    ellipse( 0, value, 40 );


}
