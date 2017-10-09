class Emitter {
    constructor( loc ) {
        this.loc = loc.copy();
        this.vel = createVector( 0, 0 );
        this.partArr = [];
    }

    frame() {
        this.p_handler();
        // this.display();
    }


    p_handler() {

        // create new particles
        var pvel = createVector( random(-2, 2), random(-2, 2) );
        pvel.add(this.vel);

        this.partArr.push(
            new Particle( this.loc, pvel )
        );

        // manage existing particles
        for (var i = this.partArr.length-1; i >= 0; i--) {
            var dead;
            dead = this.partArr[i].frame();
            if( dead ) {
                this.partArr.splice(i, 1);
            }
        }

    }


    display() {
        fill('white');
        ellipse(this.loc.x, this.loc.y, 20);
    }
}
