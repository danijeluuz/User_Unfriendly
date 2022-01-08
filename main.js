let canvas;
let title = "";
let lines = 40;

// Creiamo un canvas grande quanto la finestra
function setup(){
	createCanvas(windowWidth, windowHeight)
	background('white')

	canvas = createCanvas(windowWidth, windowHeight);

	// div to contain the controllers
	let div = createDiv();
	div.addClass("controls");
	//div.position(10, 10);
  
	// input field for text
	//let inp = createInput(title);
	//inp.input(inputEvent);
	//inp.parent(div);
  
	// slider
	//slider = createSlider(1, 255, 10);
	//slider.parent(div);
  
	// save button
	//button = createButton("Save");
	//button.mousePressed(saveImage);
	//button.parent(div);
}

function draw(){
	stroke(0)
	strokeWeight(1)
	fill(255,38,0)
	rect(20, 20, 100, 100)
	fill(255,128,0)
	ellipse(180, 70, 100, 100)
	strokeWeight(10)
	if (mouseIsPressed){
		line(mouseX, mouseY, pmouseX, pmouseY)
	}

	randomSeed(0); // remove to make random values recalculate often

	let mouseColor = (mouseX / width) * 255;
  	let mouseLine = (mouseX / 2.75)
	// background
	background(255, 38, 0);
  
	// lines in a loop
	for (var i = 0; i < mouseLine; i++) {
	  push();
	  translate(width / 2, height / 2);
	  rotate(radians((i * 360) / mouseLine+ (frameCount % 360)));
	  stroke(0);
	  strokeWeight(10);
	  line(0, 0, width, width);
	  pop();
	}
  
	/* random circles
	for (var i = 0; i < slider.value(); i++) {
	  fill(0);
	  noStroke();
	  circle(random(width), random(height), random(1, 10));
	}*/

}


// change the input text to the title
function inputEvent() {
	title = this.value();
  }
  
  // save the canvas as an image
  function saveImage() {
	saveCanvas(canvas, "myCanvas", "jpg");
  }
  
  // resizes the canvas when the window is changing
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  