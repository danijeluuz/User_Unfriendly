// Creiamo un canvas grande quanto la finestra
function setup(){
	createCanvas(windowWidth, windowHeight)
	background('red')
}

function draw(){
	stroke(0)
	strokeWeight(1)
	fill(255,0,0)
	rect(20, 20, 100, 100)
	fill(255,128,0)
	ellipse(180, 70, 100, 100)
	strokeWeight(10)
	if (mouseIsPressed){
		line(mouseX, mouseY, pmouseX, pmouseY)
	}
}

// Questa funzione ci garantisce il "fullscreen"
// anche dopo il ridimensionamento della finestra
function windowResized(){
	resizeCanvas(windowWidth, windowHeight)
}