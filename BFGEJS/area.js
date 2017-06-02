'use strict'

class GameArea{

constructor(m, location, w, h, c){
  this.main = m
  this.context = m.context;
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
  main.context.fillStyle = this.clr;
  main.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
}
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class PlayArea extends GameArea{
  constructor(main, location, w, h, c){
    super(main, location, w, h, c)
  }
  init(){

  }

  run() { // update this
      this.update();
      this.render();
      this.main.game.base.run();
      this.main.game.player.run();

      if (this.main.game.loop != null) {
        this.main.game.loop.run();
      }
  }

  update() { // render or draw this to canvas

  }

  render() { // render or draw this to canvas
    main.context.fillStyle = this.clr;
    main.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
  }

}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class SplashArea extends GameArea {

  constructor(main, location, w, h, c, buttonsStartIndex, numberButtons) {
    super(main, location, w, h, c)
    this.bsi = buttonsStartIndex;
    this.nb = numberButtons;
  }

  run() {
    this.update();
    this.render();
  }

  render() {
    this.context.fillStyle =this.clr;
    this.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
    for (let i = this.bsi; i < (this.bsi + this.nb); i++ ) {
      this.main.game.buttons[i].render();
    }
  }

  update() { // render or draw this to canvas

  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

class InfoArea extends GameArea{


constructor(main, location, w, h, c){
  super(main, location, w, h, c)
}

run(){
  this.render();
}

render(){
  this.yOffset = 270;
  this.context.fillStyle = this.clr
  this.context.lineWidth = 5;
  this.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight);
  //textSize(20);
  //Score rectangle
  this.c1 = "#412E05";
  this.c2 = "#412E41";

  this.makeInfoRect(15, -120 + this.yOffset, this.c1, this.c2, "Level");
  this.context.fillStyle = "#FFFF00"
  this.context.fillText(this.main.level, this.loc.x+75, this.loc.y - 50 + this.yOffset);
  this.makeInfoRect(15, 30 + this.yOffset, this.c1, this.c2, "Score");
  this.context.fillStyle = "#FFFF00"
  this.context.fillText(this.main.game.score, this.loc.x+75, this.loc.y + 100 + this.yOffset);
  this.makeInfoRect(15, 180+ this.yOffset, this.c1, this.c2, "Lives");
  this.context.fillStyle = "#FFFF00"
  this.context.fillText(this.main.game.livesLeft, this.loc.x+75, this.loc.y + 250+ this.yOffset );
  this.makeInfoRect(15, 330+ this.yOffset, this.c1, this.c2, "Boids");
  this.context.fillStyle = "#FFFF00"
  this.context.fillText(this.main.game.flock.boids.length, this.loc.x+75, this.loc.y + 400+ this.yOffset );
  this.makeInfoRect(15, 480+ this.yOffset, this.c1, this.c2, "Highest");
  this.context.fillStyle = "#FFFF00"
  this.context.fillText(this.main.highestScore, this.loc.x+75, this.loc.y + 550 + this.yOffset);
}

makeInfoRect(ox, oy, c1, c2, txt) {
  this.context.lineWidth = 0
  this.context.fillStyle = c1//Shadow at partial opacity
  this.context.fillRect(this.loc.x + ox + 10, this.loc.y + oy + 10, 120, 120);
  this.context.fillStyle = c2//rect color dark
  this.context.strokeStyle = "#020202"
  this.context.lineWidth = 4
  //Button rectangle with border set at 2 pixels
  this.context.fillRect(this.loc.x + ox, this.loc.y + oy, 120, 120);
  this.context.font = '26px comic sans'
  this.context.fillStyle ="#DCDC1E";
  txt.fontsize(21)
  this.context.fillText(txt, this.loc.x + ox + 20, this.loc.y + oy + 30 );
}
}
