'use strict'

window.addEventListener('load', setup, false);

class Main {
  //  Main constructor
  constructor() {

    //Start create a canvas element ++++++++++++++++++++++++++++++++
    this.canvas = document.createElement("canvas");
    this.canvas.style.backgroundColor = 'white';
    //check if canvas was made
    if(!this.canvas || !this.canvas.getContext)
    throw "No valid canvas found!";
    //match the dimensions of the canvas div
    this.canvas.width = 1000;
    this.canvas.height = 750;
    //make the canvas a child of the canvas div

    document.getElementById('canDiv').addEventListener('load', function(){this.appendChild(this.canvas)},false)
    //  create the context for the canvas
    this.context = this.canvas.getContext("2d");
    //check if context was made
    if(!this.context)
    throw "No valid context found!";
    //End create a canvas element ++++++++++++++++++++++++++++++++
    // declare instance variables for main
    this.menuButtons = [];
    this.makeRect = false;
    this.boids = []
    //create all initial items
    this.init();

  }

  init(){
    // get the current time
    this.lastTime = Date.now();
    // select canvas for callbacks
    this.canvas.addEventListener('mousemove',this.handleCNVMouseMoved,false);
    this.canvas.addEventListener('mouseover',this.handleCNVMouseOver, false);
    this.canvas.addEventListener('click', this.handleCNVMouseClicked, false);

    // create menu buttons
    this.createMenuButtons();

    // create boids
    for(let i = 0; i < 8; i++){
      this.boids[i] = new Boid(this, 300,300);
    }

    this.base = new Base(this, vector2d(blockSize*12-25, blockSize*12-25));
  }

  run() { // update canvas components --> called from draw()
    for(let j in this.boids){
      this.boids[j].run(this.boids)
    }
     this.render();

  }

  render() { // render or draw stuff to canvas
    //this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    if(this.makeRect){
      this.context.fillStyle = '#554499';
      this.context.fillRect(10, 10, 100, 100);
    }

  }
  //  +++++++++++++++++++++++++++++++++  create buttons for menu area
  createMenuButtons(){

     var numButtons = 5;
     //create and style all button divs
     for(let i = 0; i < numButtons; i++){
       // create a button and place it on the DOM tree
       var button = document.createElement('div');
       document.getElementById("menuDiv").appendChild(button);
       // place a button image on the button
       var buttImg = new Image();
       buttImg.src = "buttons/mb01.png";
       buttImg.id = "bi";
       button.appendChild(buttImg);
       //  Add event listeners to images (not buttons)
       buttImg.addEventListener('mouseover',buttonMouseOverHandler,false);
       buttImg.addEventListener('mouseout',buttonMouseOutHandler,false);
       buttImg.addEventListener('click',buttonMouseClickHandler,false);
       // style buttons
       button.style.float = "left";
       button.style.marginTop = "5px";
       button.style.marginLeft = "85px";

       //push button into buttons array
       this.menuButtons.push(button);
     }

  }   // end createMenuButtons


}//  end main class ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// add functionality to your buttons here

// wait for the window to load and than call back setup()
  // the global Main object
const FRAME_RATE=30;
const TWO_PI = Math.PI
//  ++++++  Gloabal Variables
var main=null
var startGameTime = 0;
var blockSize = 15;
var numBlocks = 60;
var infoBarSize = 150;
var playAreaSize = blockSize*numBlocks;
var screenW = blockSize*numBlocks + infoBarSize;
var screenH = blockSize*numBlocks;
var highestScore = 0;
var level, currLevel;
//  ++++++  Declare images
var clock, seg, home;
var segHeadImages;
var flock1Images;
var flock2Images;
var flock3Images;
var flock4Images;
//  ++++++  Global objects
var game;
var startTimeOffSet = Date.now()

function setup() {
  main = new Main()
  game = new Game(main);
  initGame();
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
  game.run();
  window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}

function initGame() {
 level = currLevel = 0;
 loadImages();
}

function loadImages() {
  clock = new Image();
  clock.src = ""
  seg = new Image();
  seg.src = ""
  home = new Image();
  home.src = "home.png"

  //+++++++  Bird One  +++++++++++++++++++++++++++++++++
  flock1Images = [{},{},{},{},{},{},{},{},{},{},{},{},{}];
  for (let i=0; i < flock1Images.length-1; i++) {
    flock1Images[i] = new Image()
    flock1Images[i].src = "birdOne/b"+i+".png";
  }
  //+++++++  Bird Two  +++++++++++++++++++++++++++++++++
  flock2Images = [{},{},{},{},{},{},{},{},{}]
  for (let i=0; i < flock2Images.length - 1; i++) {
    flock2Images[i] = new Image()
    flock2Images[i].src = "birdTwo/bb"+i+".png";
  }
  //+++++++  Bird Three  +++++++++++++++++++++++++++++++++
  flock3Images = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  for (let i=0; i < flock3Images.length - 1; i++) {
    flock3Images[i] = new Image()
    flock3Images[i].src = "birdThree/b"+i+".png"
  }
  //+++++++  Bird Four  +++++++++++++++++++++++++++++++++
  flock4Images = [{},{},{},{},{},{},{},{},{}]
  for (let i=0; i < flock4Images.length - 1; i++) {
    flock4Images[i] = new Image()
    flock4Images[i].src = "Bat/b"+i+".png";
  }

  //+++++++  SegHead  +++++++++++++++++++++++++++++++++
  segHeadImages = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]
  for (let i=0; i < segHeadImages.length - 1; i++) {
    segHeadImages[i] = new Image()
    segHeadImages[i].src = "segHead/h"+i+".png";
  }
}

// Start main class  +++++++++++++++++++++++++++++++++++++++++++++++++++++

function buttonMouseOverHandler(){
   this.src = "buttons/mb02.png"
}


function buttonMouseOutHandler(){
  this.src = "buttons/mb01.png"
}

function buttonMouseClickHandler(){
  main.makeRect = !main.makeRect;
}
function mousePressed() {
  game.mousePressedHandler(new vector2d(mouseX, mouseY));
}

function mouseMoved() {
  game.mouseMovedHandler(new vector2d(mouseX, mouseY));
}

function keyPressed() {
  game.keyCodeHandler(keyCode);
}
