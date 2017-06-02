//++++++++++++++++++++++++++++++++++++++++++++++++++++++++  Segment Class  ++++++++++++++

class Segment {
  //  +++++++++++++++++++  Class properties

  // ++++++++++++++++   Constructor  +++++++++++
  Segment(main, x, y, index) {
    this.main = main
    this.context = this.main.context;
    this.c = 0
    this.count = 0;
    this.loc = new vector2d(x, y);
    this.pIndex = index;

  }

  //  peedType distinguishes loops vs player
  display(segType) {
    this.context.stroke(.5);

    if (segType === "loop") {
      this.context.stroke(2)
      this.context.lineWidth = 2
      rect(this.loc.x, this.loc.y, this.main.blockSize, this.main.blockSize);
      this.context.stroke(0);
      fill(250, 250, 12);
      rect(this.loc.x+4, this.loc.y+4, this.main.blockSize-8, this.main.blockSize-8);
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
      if (this.main.game.player.west)  this.angle += 3.1415926536;
      if (this.main.game.player.east)  this.angle += 0;
      if (this.main.game.player.north) this.angle += -1.5707963268;
      if (this.main.game.player.south) this.angle += 1.5707963268;
      this.context.translate(this.loc.x, this.loc.y);
      this.context.rotate(this.angle);
      this.context.scale(1.5,1.5);
      this.context.drawImage(this.main.segHeadImages[this.count++], 0, 0 );
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
      if(index < 5){
        this.context.scale(.2*index,.2*index)
      }
      if(index > this.main.player.body.length - 6 ){
        scale(.18*(this.main.player.body.length-index),.18*(this.main.player.body.length-index));
      }
      this.context.restore()
    }
  } // end display


  hitTest(b) {
    return (b.loc.x > this.loc.x &&
      b.loc.x < this.loc.x + this.main.blockSize &&
      b.loc.y > this.loc.y &&
      b.loc.y < this.loc.y + this.main.blockSize)
  }
}  // end class
