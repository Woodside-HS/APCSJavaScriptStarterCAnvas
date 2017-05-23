'use strict'

class gameArea{
this.loc;
this.myWidth;
this.myHeight;
this.clr;

constructor(location, w, h, c){
  this.loc = location;
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

render() { // render or draw this to canvas
  fill(clr);
  fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class playArea extends gameArea{
  constructor(location, w, h, c){

  }
  init(){

  }

  run() { // update this
      this.update();
      this.render();
      game.base.run();
      game.player.run();

      if (game.loop != null) {
        game.loop.run();
      }
  }

  update() { // render or draw this to canvas

  }

  render() { // render or draw this to canvas
    fill(clr);
    fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
  }

}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class splashArea extends gameArea {

  this.bsi;
  this.nb;

  constructor(location, w, h, c, buttonsStartIndex, numberButtons) {
    this.bsi = buttonsStartIndex;
    this.nb = numberButtons;
  }

  run() {
    this.update();
    this.render();
  }

  render() {
    fill(clr);
    fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight, 20);
    for (i = thsi.bsi; i < (this.bsi + this.nb); i++ ) {
      game.buttons[i].render();
    }
  }

  update() { // render or draw this to canvas

  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class infoArea extends gameArea{


constructor(location, w, h, c){

}

run(){
  this.render();
}

render(){
  this.yOffset = 270;
  fill(this.clr);
  stroke(2);
  fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight, 20);
  textSize(20);
  //Score rectangle
  this.c1 = rgb(65, 45, 5);
  this.c2 = rgb(65, 45, 65);

  this.makeInfoRect(15, -120 + this.yOffset, this.c1, this.c2, "Level");
  fill(255, 255, 0);
  text(this.level, this.loc.x+75, this.loc.y - 50 + this.yOffset);
  this.makeInfoRect(15, 30 + this.yOffset, this.c1, this.c2, "Score");
  fill(255, 255, 0);
  text(game.score, this.loc.x+75, this.loc.y + 100 + this.yOffset);
  this.makeInfoRect(15, 180+ this.yOffset, this.c1, this.c2, "Lives");
  fill(255, 255, 0);
  text(game.livesLeft, this.loc.x+75, this.loc.y + 250+ this.yOffset );
  makeInfoRect(15, 330+ this.yOffset, this.c1, this.c2, "Boids");
  fill(255, 255, 0);
  text(game.flock.boids.length, this.loc.x+75, this.loc.y + 400+ this.yOffset );
  this.makeInfoRect(15, 480+ this.yOffset, this.c1, this.c2, "Highest");
  fill(255, 255, 0);
  text(this.highestScore, this.loc.x+75, this.loc.y + 550 + this.yOffset);
}

makeInfoRect(ox, oy, c1, c2, txt) {
  noStroke();
  fill(c1);//Shadow at partial opacity
  rect(this.loc.x + ox + 10, this.loc.y + oy + 10, 120, 120, 15);
  fill(c2);//rect color dark
  stroke(2);
  strokeWeight(4);
  //Button rectangle with border set at 2 pixels
  fillRect(this.loc.x + ox, loc.y + oy, 120, 120, 15);
  textSize(21);
  fill(220, 220, 30);
  text(txt, this.loc.x + ox + 20, this.loc.y + oy + 30 );
}
}
