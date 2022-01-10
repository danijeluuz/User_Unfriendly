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

// Stack of modals
let currentlyOpenModals = [];

const noModalsOpen = () => !currentlyOpenModals.length;

const openModal = modalId => {
  const modalWrapper = document.getElementById(modalId);
  modalWrapper.classList.add("visible");
  currentlyOpenModals.push(modalWrapper);
};

// By definition, it's always the topmost modal that will be closed first
const closeTopmostModal = () => {
  if (noModalsOpen()) {
    return;
  }

  const modalWrapper = currentlyOpenModals[currentlyOpenModals.length - 1];
  modalWrapper.classList.remove("visible");
  currentlyOpenModals.pop();
};

const modalTriggers = document.querySelectorAll(".modal-trigger");
modalTriggers.forEach(modalTrigger => {
  modalTrigger.addEventListener("click", clickEvent => {
    const trigger = clickEvent.target;
    const modalId = trigger.getAttribute("data-modal-id");
    openModal(modalId);
  });
});

// Otherwise, clicking the content of a modal will propagate the click to the modal wrapper,
// and that will close the entire thing. That's not what we want!
document.querySelectorAll(".modal-window").forEach(modal => {
  modal.addEventListener("click", clickEvent => {
    clickEvent.stopPropagation();
  });
});

const modalWrappers = document.querySelectorAll(".modal-wrapper");
modalWrappers.forEach(modalWrapper => {
  modalWrapper.addEventListener("click", () => {
    closeTopmostModal();
  });
});

document.querySelectorAll(".close-modal-button").forEach(closeModalButton => {
  closeModalButton.addEventListener("click", () => {
    closeTopmostModal();
  });
});

document.body.addEventListener("keyup", keyEvent => {
  if (keyEvent.key === "Escape") {
    closeTopmostModal();
  }
});

function show(){
	document.getElementById('show_image').style.display = "block";

	document.getElementById('show_here').style.display = "none";
}