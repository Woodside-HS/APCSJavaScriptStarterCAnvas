//++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Segment Class  ++++++++++++++

class Segment {
  //  +++++++++++++++++++  Class properties

  // ++++++++++++++++   Constructor  +++++++++++
  Segment(main, x, y, index) {
    this.main = main
    this.context = this.main.context;
    this.c = 0
    this.count = 0;
    this.loc = new PVector(x, y);
    this.pIndex = index;
  }

  //  peedType distinguishes loops vs player
  display(segType) {
    this.context.stroke(.5);

    if (segType === "loop") {
      this.context.stroke(2)
      this.context.lineWidth = 2
      rect(this.loc.x, this.loc.y, blockSize, blockSize);
      this.context.stroke(0);
      fill(250, 250, 12);
      rect(this.loc.x+4, this.loc.y+4, blockSize-8, blockSize-8);
      this.context.fillStyle = '#FAFA0C'
      this.context.fill();
    }
  }

  display(segType, index) {
    this.context.stroke(.5);

    if (segType === "head") {
      this.angle =   1.5707963268;
      this.context.strokeStyle = '#3232FA'
      this.context.fillStyle = '#FF1402'
      //ellipse(loc.x, loc.y, 15, 15);
      this.context.save()
      if (game.player.west)  this.angle += 3.1415926536;
      if (game.player.east)  this.angle += 0;
      if (game.player.north) this.angle += -1.5707963268;
      if (game.player.south) this.angle += 1.5707963268;
      this.context.translate(this.loc.x, this.loc.y);
      this.context.rotate(this.angle);
      this.context.scale(1.5,1.5);
      this.context.drawImage(segHeadImages[this.count++], 0, 0 );
      if (this.count > 22) this.count = 0;
      this.context.restore()
    }
    else if (segType === "player") {
      this.angle = 1.5707963268
      this.context.strokeStyle = '#3232FA'
      this.context.fillStyle = '#FF1402'
      //ellipse(loc.x, loc.y, 15, 15);
      this.context.save()
      this.context.translate(this.loc.x, this.loc.y);
      this.context.rotate(this.angle);
      if(this.index < 5){
        this.context.scale(.2*this.index,.2*this.index)
      }
      if(this.index > game.player.body.size() - 6 ){
        scale(.18*(game.player.body.size()-this.index),.18*(game.player.body.size()-this.index));
      }
      this.context.drawImage("seg.png", 0, 0 );
      this.context.restore()
    }
  } // end display


  hitTest(b) {
    if (b.loc.x > loc.x &&
      b.loc.x < loc.x + blockSize &&
      b.loc.y > loc.y &&
      b.loc.y < loc.y + blockSize) return true;
    return false;
  }
}  // end class
