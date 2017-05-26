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
    display()
  }

  display() {
    image(home, loc.x+25, loc.y+8);
  }
} // end  class
