class Spark {
    constructor( loc, vel, color ) {
        this.loc = loc.copy();
        this.vel = vel.copy();
        this.vel.add( createVector( random(-1,1), random(-1,1) ) );
        this.acc = createVector( 0, 0.5 );

        this.color = color;
        this.size = random( 5, 30 );
        this.isAlive = true;
        this.lifespan = frameRate() * 1;
        this.maxLife = this.lifespan;

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
        noStroke();
        fill(
            red(this.color),
            green(this.color),
            blue(this.color),
            map(this.lifespan, 0, this.maxLife, 0, 200 )
        );
        translate( this.loc.x, this.loc.y );
        // rotate( this.vel.heading() );
        ellipse( 0, 0, this.size );
        pop();
    }
}
