let canvas;
let title = "";
let lines = 40;


//gestione evento click menu
$( "#menu-btn" ).click(function() {
  
	//slide toggle menu
	$( "nav ul.menu" ).slideToggle();
   
   //alterna classe menu-aperto
   $( "#menu-btn").toggleClass("menu-aperto");
   
 });

// Creiamo un canvas grande quanto la finestra
function setup(){
	noCursor();
	


	// div to contain the controllers
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

	background(45, 223, 255);
	/* lines in a loop
	for (var i = 0; i < mouseLine; i++) {
	  push();
	  translate(width / 2, height / 3.6);
	  rotate(radians((i * 360) / mouseLine+ (frameCount % 360)));
	  stroke(0);
	  strokeWeight(13);
	  line(0, 0, width, width);
	  pop();
	}*/
  
	/* random circles
	for (var i = 0; i < slider.value(); i++) {
	  fill(0);
	  noStroke();
	  circle(random(width), random(height), random(1, 10));
	}*/

	noStroke()
	fill(0)
	ellipse(mouseX, mouseY, 25, 25);
}

