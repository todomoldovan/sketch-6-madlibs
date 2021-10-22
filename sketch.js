//Theodora Moldovan
//AT 101
//Sketch 2: Weaving
//9/15/21

//Goal: create a program that draws a generative "weave" that is different on every refresh

//Accomplished: goal above by drawing rectangles using randomness with pastel colors, predefined stroke widths and a 50/50 chance of lines going above/under another

//Next steps: play around with different stroke widths and add randomization to this element too (con: doesn't look as "weave-y")

var salmon = '#fec5bb';
var darkPink = '#fcd5ce';
var lightPink = '#fae1dd';
var whitePink = '#f8edeb';
var lightBlue = '#e8e8e4';
var darkBlue = '#d8e2dc';
var greyBlue = '#ece4db';
var whiteOrange = '#ffe5d9';
var lightOrange = '#ffd7ba';
var darkOrange = '#fec89a';
var darkGreen = '#ccd5ae';
var lightGreen = '#e9edc9';
//color palette inspiration: https://coolors.co/fec5bb-fcd5ce-fae1dd-f8edeb-e8e8e4-d8e2dc-ece4db-ffe5d9-ffd7ba-fec89a

var colors = [salmon, darkPink, lightPink, whitePink, lightBlue, darkBlue, greyBlue, whiteOrange, lightOrange, darkOrange, darkGreen, lightGreen];

var stripWidth = 30;

//storing a 50/50 chance in a variable
var chance = 0.5;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  
  //commenting out noLoop to see it redrawing the weave 
  frameRate(5);
  
  //calling the noLoop function to stop the draw function from looping
  //noLoop();
  
  //setting a darker background for the pastel weave colors
  background('#6d6875');
}

function draw() {
  background('#6d6875')

  //for loop for vertical lines
  //variable x symbolizing x axis coordinate between 0 and windowWidth
  //x increase dependant on stripWidth for consistent blank spaces
  for (var x = 0; x < windowWidth; x = x + 2 * stripWidth) {
    fill(random(colors))
    noStroke()
    //coordinate for rectangle is (x,0) bc all lines are drawn from the very top and they move left as the for loop progresses
    //stripWidth and windowHeight symbolize the pre-defined width of the strip and the height of the window
    rect(x, 0, stripWidth, windowHeight)
  }

  //for loop for horizontal lines
  //variable x symbolizing x axis coordinate between 0 and windowWidth
  //variable y symbolizing y axis coordinate between 0 and windowHeigth
  for (var y = 0; y < windowHeight; y += 2 * stripWidth / 3) {
    //initializing a second variable for horizontal line width/"height"
    var stripHeight = stripWidth / 3

    fill(random(colors))
    noStroke()
    //same logic as for first loop
    for (x = 0; x < windowWidth; x = x + 2 * stripWidth) {
      //splitting horizontal lines going over/under vertical lines 50/50
      if (random() < chance) {
        //line goes over
        rect(x, y, 2*stripWidth, stripHeight)
      } else {
        //line goes under
        rect(x + stripWidth, y, stripWidth, stripHeight)
      }
    }
  }
}