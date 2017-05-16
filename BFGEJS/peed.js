'use strict'

class Peed{
  //used for both player and loop
  this.body = [];
  //Gathers the indexes of each segment that hits a boid
  this.peedHitIndexes = [];
  //Gathers the indexes of each segment that hits a boid
  this.loc = new vector2d();
  this.clr;
  this.north
  this.south
  this.east
  this.west
  this.moved;
  this.name;
  this.segCount;
  this.peedDelay;
  this.addSegmentInterval = 100;
  this.lastSegmentAdded;

  constructor(headLocation, segmentCount, name) {
    this.name = name;
    this.segCount = segmentCount;
    this.loc = headLocation;
    this.clr = color(200, 100, 50);
    this.body = [];
    this.north = true;
    this.moved = false;
    this.lastSegmentAdded = millis();
  }

  init(){

  }

  run() { // update this
    if(this.moved){
      this.update();
      this.render();
    }
  }
  update() { // render or draw this to canvas

  }
  render() { // render or draw this to canvas
    for (i = 0; i < this.body.length; i++) {
      body[i].display("");
    }
  }

  //  ads (numSegments) segment abject to the body arraylist
  addBodySegments(numSegments) {

    for (i = 0; i < numSegments; i++) {
      this.x = (int)game.player.body[i].loc.x;
      this.y = (int)game.player.body[i].loc.y;
      this.body.push(new Segment(this.x, this.y, i));

    }
  }
}
