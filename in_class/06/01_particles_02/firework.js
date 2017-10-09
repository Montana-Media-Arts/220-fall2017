class Firework {
    constructor() {
        this.loc = createVector( width/2, height );
        this.vel = createVector( 0, 0 );
        this.acc = createVector( random(-3, 3), 0 );

        this.prop = createVector( 0, random( -1, -2 ) );

        this.isAlive = true;
        this.color = color( random(255), random(255), random(255) );

        this.sparks = [];


    }

    frame() {
        this.update();
        this.p_manage();
        this.checkForDeath();
        // this.display();
    }


    update() {
        this.addForce( this.prop );
        this.addForce( createVector( 0, 1) );

        this.vel.add(this.acc);
        this.vel.limit( 20 );
        this.loc.add( this.vel );
    }

    addForce( force ) {
        this.acc.add( force );
    }

    checkForDeath() {
        if ( this.sparks.length <= 0 ) {
            this.isAlive = false;
        }
    }

    p_manage() {

        if (this.loc.y > -200) {
            this.sparks.push(
                new Spark(this.loc, this.vel, this.color)
            );
        }

        for( var i=this.sparks.length-1; i >= 0; i-- ) {
            this.sparks[i].frame();
            if (!this.sparks[i].isAlive) {
                this.sparks.splice(i, 1);
            }
        }
    }

    display() {
        push();
        fill( this.color );
        translate( this.loc.x, this.loc.y );
        // rotate( this.vel.heading() );
        triangle(-10, 10, 10, 10, 0, -10 );
        pop();
    }

}
