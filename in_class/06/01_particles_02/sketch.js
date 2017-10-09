var fws = [];

function setup() {
    createCanvas( windowWidth, windowHeight );
    // frameRate(1);
}


function draw() {
    background( 'rgb(24, 24, 60)' );

    for (var i = fws.length-1; i >= 0; i-- ) {
        fws[i].frame();
        if (!fws[i].isAlive) {
            fws.splice(i, 1);
        }
    }

    fill('white');
    text(fws.length, 10, 10);
}


function mousePressed() {
    fws.push( new Firework() );
}
