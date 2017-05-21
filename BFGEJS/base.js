class Base {

  constructor(m, location) {
    this.main = m
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
