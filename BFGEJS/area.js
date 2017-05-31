'use strict'

class GameArea{

constructor(main, location, w, h, c){
  this.main = main
  this.context = this.main.context;
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
      game.base.run();
      game.player.run();

      if (game.loop != null) {
        game.loop.run();
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
    main.context.fillStyle =this.clr;
    main.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight, 20);
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
  main.context.fillStyle = this.clr
  main.context.lineWidth = 2
  main.context.fillRect(this.loc.x, this.loc.y, this.myWidth, this.myHeight, 20);
  //textSize(20);
  //Score rectangle
  this.c1 = "#412E05";
  this.c2 = "#412E41";

  this.makeInfoRect(15, -120 + this.yOffset, this.c1, this.c2, "Level");
  main.context.fillStyle = "#FFFF00"
  main.context.fillText(this.main.level, this.loc.x+75, this.loc.y - 50 + this.yOffset);
  this.makeInfoRect(15, 30 + this.yOffset, this.c1, this.c2, "Score");
  main.context.fillStyle = "#FFFF00"
  main.context.fillText(this.main.game.score, this.loc.x+75, this.loc.y + 100 + this.yOffset);
  this.makeInfoRect(15, 180+ this.yOffset, this.c1, this.c2, "Lives");
  main.context.fillStyle = "#FFFF00"
  main.context.fillText(this.main.game.livesLeft, this.loc.x+75, this.loc.y + 250+ this.yOffset );
  this.makeInfoRect(15, 330+ this.yOffset, this.c1, this.c2, "Boids");
  main.context.fillStyle = "#FFFF00"
  main.context.fillText(this.main.game.flock.boids.length, this.loc.x+75, this.loc.y + 400+ this.yOffset );
  this.makeInfoRect(15, 480+ this.yOffset, this.c1, this.c2, "Highest");
  main.context.fillStyle = "#FFFF00"
  main.context.fillText(this.main.highestScore, this.loc.x+75, this.loc.y + 550 + this.yOffset);
}

makeInfoRect(ox, oy, c1, c2, txt) {
  main.context.lineWidth = 0
  main.context.fillStyle = c1//Shadow at partial opacity
  main.context.rect(this.loc.x + ox + 10, this.loc.y + oy + 10, 120, 120, 15);
  main.context.fillStyle = c2//rect color dark
  main.context.strokeStyle = "#020202"
  main.context.lineWidth = 4
  //Button rectangle with border set at 2 pixels
  main.context.fillRect(this.loc.x + ox, this.loc.y + oy, 120, 120, 15);
  main.context.font = '26px comic sans'
  main.context.fillStyle ="#DCDC1E";
  txt.fontsize(21)
  main.context.fillText(txt, this.loc.x + ox + 20, this.loc.y + oy + 30 );
}
}
