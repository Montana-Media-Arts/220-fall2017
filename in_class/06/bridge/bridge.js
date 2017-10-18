function Bridge() {
  this.plank_r = 10;
  this.numOfJoints = width / this.plank_r/2;
  console.log(this.numOfJoints);
  // this.endpoint = [];
  this.pBtwn = [];


  this.pBtwn.push(new Particle(0, height/4, this.plank_r, 0, 'static'));

  for (var i = 1; i < this.numOfJoints; i++ ){
    this.pBtwn.push(new Particle(i*this.plank_r*2, height/2, this.plank_r ));

    var djd = new box2d.b2DistanceJointDef();
    // // Connection between previous particle and this one
    djd.bodyA = this.pBtwn[i-1].body;
    djd.bodyB = this.pBtwn[i].body;
    // // Equilibrium length
    djd.length = scaleToWorld(this.plank_r*2);
    //
    // // These properties affect how springy the joint is
    djd.frequencyHz = 0;  // Try a value less than 5 (0 for no elasticity)
    djd.dampingRatio = 0.9; // Ranges between 0 and 1 (1 for no springiness)
    //
    // // Make the joint.  Note we aren't storing a reference to the joint ourselves anywhere!
    // // We might need to someday, but for now it's ok
    var dj = world.CreateJoint(djd);
  }

  this.pBtwn.push(new Particle(width, height/4, this.plank_r, 10, 'static'));

  // console.log(this.pBtwn.length);
  var djd = new box2d.b2DistanceJointDef();
  // Connection between previous particle and this one
  djd.bodyA = this.pBtwn[i-1].body;
  djd.bodyB = this.pBtwn[i].body;
  // Equilibrium length
  djd.length = scaleToWorld(this.plank_r*2);

  // These properties affect how springy the joint is
  djd.frequencyHz = 0;  // Try a value less than 5 (0 for no elasticity)
  djd.dampingRatio = 0.9; // Ranges between 0 and 1 (1 for no springiness)

  // Make the joint.  Note we aren't storing a reference to the joint ourselves anywhere!
  var dj = world.CreateJoint(djd);



  this.done = function() {
    for (var i = this.pBtwn.length-1; i >= 0; i--) {
      return this.pBtwn[i].done();
    }
  };

  this.display= function() {
    var p1, p2;
    for (var i = this.pBtwn.length-1; i > 0; i--) {
      p1 = scaleToPixels(this.pBtwn[i].body.GetPosition());
      p2 = scaleToPixels(this.pBtwn[i-1].body.GetPosition());
      this.pBtwn[i].display();
      stroke(200);
      strokeWeight(2);
      line(p1.x, p1.y, p2.x, p2.y);
    }

    p1 = scaleToPixels(this.pBtwn[1].body.GetPosition());
    p2 = scaleToPixels(this.pBtwn[0].body.GetPosition());
    line(p1.x, p1.y, p2.x, p2.y);
    this.pBtwn[0].display();




  }


}
