'use strict'

class Button {
  this.loc;
  this.myWidth;
  this.myHeight;
  this.clr = color(10, 50, 8);
  this.txt = "";

constructor(txt, loc, w, h, c){
  this.txt = txt;
  this.loc = loc;
  this.myWidth = w;
  this.myHeight = h;
  this.clr = c;
}

init(){

}

run() { // update this
    this.update();
    this.render();
}
update() { // render or draw this to canvas
}

render(){
  noStroke();
  fill(5, 25, 4, 110);//Shadow at partial opacity
  fillRect(this.loc.x+15, this.loc.y-15, this.myWidth, this.myHeight, 20);
  fill(this.clr);
  stroke(2);
  strokeWeight(4);
  //Button rectangle with border set at 2 pixels
  fillRect(this.loc.x, this.loc.y-30, this.myWidth, this.myHeight, 20);
  textSize(60);
  fill(155, 105, 30, 155);
  text(this.txt, this.loc.x+44, this.loc.y+54 );
  fill(255, 255, 10);
  text(this.txt, this.loc.x+40, this.loc.y+50 );
}

//  mouseLoc sent from mousePressed
//  Check to see if mouse if over bounds of
//  button when pressed
hitTest(mouseLoc) {
  if (  mouseLoc.x > this.loc.x       &&
    mouseLoc.x < this.loc.x + myWidth &&
    mouseLoc.y > this.loc.y           &&
    mouseLoc.y < this.loc.y + myHeight   )
    return true;

  return false;
}

}
