'use strict'

window.addEventListener('load', setup, false);
const ARB_OFFSET_X = 15;
const ARB_OFFSET_Y = 60

const TWO_PI = Math.PI*2;
var main;
var startTimeOffSet = Date.now();
const FRAME_RATE=30;

function setup() {
  main = new Main()
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
  main.run()
  window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}

class Main {
  //  Main constructor
  constructor() {
    this.clock;
    this.seg;
    this.home;
    this.segHeadImages = [];
    this.flock1Images = [];
    this.flock2Images = [];
    this.flock3Images = [];
    this.flock4Images = [];
    //Start create a canvas element ++++++++++++++++++++++++++++++++
    this.canvas = document.getElementById("canDiv");
    this.canvas.style.backgroundColor = 'white';
    //check if canvas was made
    if(!this.canvas || !this.canvas.getContext)
    throw "No valid canvas found!";
    //match the dimensions of the canvas div
    this.canvas.width = 1050;
    this.canvas.height = 900;
    //  create the context for the canvas
    this.context = this.canvas.getContext("2d");
    //check if context was made
    if(!this.context)
    throw "No valid context found!";
    //End create a canvas element ++++++++++++++++++++++++++++++++
    // declare instance variables for main
    this.boids = []

    this.startGameTime = 0;
    this.blockSize = 15;
    this.numBlocks = 60;
    this.infoBarSize = 150;
    this.playAreaSize = this.blockSize*this.numBlocks;
    this.screenW = this.blockSize*this.numBlocks + this.infoBarSize;
    this.screenH = this.blockSize*this.numBlocks;
    this.highestScore = 0;
    this.level
    this.currLevel;
    //create all initial items
    this.init();
    this.game = new Game(this)

  }

  init(){

    this.lastTime = Date.now();

    this.canvas.addEventListener('mousemove',this.handleCNVMouseMoved,false);
    this.canvas.addEventListener('mouseover',this.handleCNVMouseOver, false);
    this.canvas.addEventListener('click', this.handleCNVMouseClicked, false);

    this.loadImages()
  }

  handleCNVMouseMoved(e){
    main.game.mouseMovedHandler(new vector2d(e.offsetX+ARB_OFFSET_X,e.offsetY+ARB_OFFSET_Y)); // arbataryy offset glitch
  }
  handleCNVMouseClicked(e){
    main.game.mousePressedHandler(new vector2d(e.offsetX+ARB_OFFSET_X,e.offsetY+ARB_OFFSET_Y)); // arbataryy offset glitch
  }

  run() { // update canvas components --> called from draw()
    this.game.run()
  }

  render() { // render or draw stuff to canvas
    //this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    // if(this.makeRect){
    //   this.context.fillStyle = '#554499';
    //   this.context.fillRect(10, 10, 100, 100);
    // }

  }

  loadImages() {
    this.home = new Image();
    this.home.src = "images/other/home.png"

    //+++++++  Bird One  +++++++++++++++++++++++++++++++++
    this.flock1Images = [{},{},{},{},{},{},{},{},{},{},{},{},{}];
    for (let i=0; i < this.flock1Images.length-1; i++) {
      this.flock1Images[i] = new Image()
      this.flock1Images[i].src = "images/flock1/b"+i+".png";
    }
    //+++++++  Bird Two  +++++++++++++++++++++++++++++++++
    this.flock2Images = [{},{},{},{},{},{},{},{},{}]
    for (let i=0; i < this.flock2Images.length - 1; i++) {
      this.flock2Images[i] = new Image()
      this.flock2Images[i].src = "images/flock2/bb"+i+".png";
    }
    //+++++++  Bird Three  +++++++++++++++++++++++++++++++++
    this.flock3Images = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
    for (let i=0; i < this.flock3Images.length - 1; i++) {
      this.flock3Images[i] = new Image()
      this.flock3Images[i].src = "images/flock3/b"+i+".png"
    }
    //+++++++  Bird Four  +++++++++++++++++++++++++++++++++
    this.flock4Images = [{},{},{},{},{},{},{},{},{}]
    for (let i=0; i < this.flock4Images.length - 1; i++) {
      this.flock4Images[i] = new Image()
      this.flock4Images[i].src = "images/flock4/b"+i+".png";
    }

    //+++++++  SegHead  +++++++++++++++++++++++++++++++++
    this.segHeadImages = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
    for (let i=0; i < this.segHeadImages.length - 1; i++) {
      this.segHeadImages[i] = new Image()
      this.segHeadImages[i].src = "images/segHead/h"+i+".png";
    }
  }


}//  end main class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function keyPressed() {
  game.keyCodeHandler(keyCode);
}
