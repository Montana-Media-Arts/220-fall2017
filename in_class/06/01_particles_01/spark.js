class Spark {
    constructor( loc, vel, color ) {
        this.loc = loc.copy();
        this.vel = vel.copy();
        this.vel.add( createVector( random(-3,3), random(-3,3) ) );
        this.acc = createVector( 0, 1 );

        this.color = color;
        this.size = random( 5, 30 );
        this.isAlive = true;
        this.lifespan = frameRate() * 2;

    }


    frame() {
        this.update();
        this.checkForDeath();
        this.display();
    }

    update() {

        this.vel.add(this.acc);
        this.loc.add(this.vel);

        this.lifespan--;
    }

    checkForDeath() {
        if (this.lifespan <= 0) {
            this.isAlive = false;
        }
    }

    display() {
        push();
        fill( this.color );
        translate( this.loc.x, this.loc.y );
        // rotate( this.vel.heading() );
        ellipse( 0, 0, this.size );
        pop();
    }
}
