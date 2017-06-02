'use strict'

class Peed{


  constructor(main, headLocation, segmentCount, name) {
    this.main = main
    this.context = this.main.context;
    this.name = name;
    this.segCount = segmentCount;
    this.loc = headLocation;
    this.clr = "#C86432";
    this.body = [];
    this.north = true;
    this.moved = false;
    this.lastSegmentAdded = Date.now() - startTimeOffSet;
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
    for (let i = 0; i < this.body.length; i++) {
      this.body[i].display("");
    }
  }

  //  ads (numSegments) segment abject to the body arraylist
  addBodySegments(numSegments) {
    for (let i = 0; i < numSegments; i++) {
      this.loc.x = this.body[i].loc.x;
      this.loc.y = this.body[i].loc.y;
      this.body.push(new Segment(this.main, this.x, this.y, i));

    }
  }

  //Use key code to set direction
   setDirection(kc) {
      // set to true no matter what key is pressed
     this.north = false
     this.south = false
     this.east = false
     this.west = false;
     switch(kc) {
     case 38:
       this.north = true;
       this.moved = true;
       break;
     case 39:
       this.east = true;
       this.moved = true;
       break;
     case 40:
       this.south = true;
       this.moved = true;
       break;
     case 37:
       this.west = true;
       this.moved = true;
       break;
     }
   }
}
