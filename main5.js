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
	background(0);
  

	randomSeed(0); // remove to make random values recalculate often


  	var mouseLine = map(mouseX, 0, width, 0, 1500);
	  console.log(mouseLine);
	// background

	/* random circles*/
	for (var i = 0; i < mouseLine; i++) {
	  fill("#2DDFFF");
	  noStroke();
	  circle(random(width), random(height), random(1, 60));
	}	
	noStroke()
	fill("#2DDFFF")
	ellipse(mouseX, mouseY, 25, 25);

}

