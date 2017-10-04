function Particle( loc, vel ) {
    this.loc = loc.copy();
    this.vel = vel.copy();
    this.speedLimit = 100;
    this.acc = createVector( 0, 0.1 );
    this.size = 20;
}

/**
 * calls all other function for this particle obj
 *
 */
Particle.prototype.frame = function(){
    this.update();
    this.display();
};


/**
 * display the particle
 *
 */
Particle.prototype.display = function(){

    fill( 'rgba(255, 226, 31, 0.93)' );

    ellipse( this.loc.x, this.loc.y, this.size );
};


/**
 * update the particle pos and data
 *
 */
Particle.prototype.update = function(){

    this.vel.add(this.acc);
    this.vel.limit(this.speedLimit);
    this.loc.add(this.vel);


};
