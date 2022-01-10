let canvas;
let title = "";
let lines = 40;

// Creiamo un canvas grande quanto la finestra
function setup(){
	noCursor();

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
	
	createCanvas(windowWidth, windowHeight)

	canvas = createCanvas(windowWidth, windowHeight);


	randomSeed(0); // remove to make random values recalculate often


  	var mouseLine = map(mouseX, 0, width, 0, 255);
	  console.log(mouseLine);
	// background
	background(45, 223, 255);
  
	// lines in a loop
	for (var i = 0; i < mouseLine; i++) {
	  push();
	  translate(width / 2, height / 2);
	  rotate(radians((i * 360) / mouseLine+ (frameCount/3 % 360)));
	  stroke(0);
	  strokeWeight(25);
	  line(0, 0, width, width);
	  pop();
	}
  
	/* random circles
	for (var i = 0; i < slider.value(); i++) {
	  fill(0);
	  noStroke();
	  circle(random(width), random(height), random(1, 10));
	}

	
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
	*/
  noStroke()
  fill("#2DDFFF")
  ellipse(mouseX, mouseY, 25, 25);


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
  