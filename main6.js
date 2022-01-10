//gestione evento click menu
$( "#menu-btn" ).click(function() {
  
	//slide toggle menu
	$( "nav ul.menu" ).slideToggle();
   
   //alterna classe menu-aperto
   $( "#menu-btn").toggleClass("menu-aperto");
   
 });

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
	background(45,223,255);

	
	/*
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
  fill(0)
  ellipse(mouseX, mouseY, 25, 25);

}
Random()


function Random() {
	var rnd = Math.floor(Math.random() * 10000000000);
	document.getElementById('tb').value = rnd;
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
  