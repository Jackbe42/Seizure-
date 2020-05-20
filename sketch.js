// Classes in JavaScript with ES6
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/6.2-classes.html
// https://youtu.be/T-HGdc8L-7w
// https://editor.p5js.org/codingtrain/sketches/qi7N4LWq

let bubble1;
let bubble2;
let  array = [];
let s = 10

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  for(i = 0;i<s;i+=1){
  	array.push(new Bubble(random(1000),random(1000),random(100)));
  }
}


function draw() {
  background(0);
  for(i = 0;i<s;i+=1){
  	array[i].move();
 	array[i].show();
  }
  
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x +=random(-5,5);
    this.y +=random(-5,5);
  }


 show() { 
    stroke(random(255),random(255),random(255));
    strokeWeight(random(10));
    noFill();
    ellipse(this.x, this.y, this.r, this.r);
    rect(this.x-45, this.y+50, this.r, this.r/2);
  }
}
