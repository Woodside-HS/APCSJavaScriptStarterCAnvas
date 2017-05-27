class Base {

  constructor(main, location) {
    this.main = main
    this.context = this.main.context;
    this.loc = location;
  }

  init(){
    this.loc = vector2d(0,0)
  }

  run() {
    this.display()
  }

  display() {
    this.context.drawImage(home, this.loc.x+25, this.loc.y+8);
  }
} // end  class
