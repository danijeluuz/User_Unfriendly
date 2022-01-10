//gestione evento click menu
$( "#menu-btn" ).click(function() {
  
	//slide toggle menu
	$( "nav ul.menu" ).slideToggle();
   
   //alterna classe menu-aperto
   $( "#menu-btn").toggleClass("menu-aperto");
   
 });

 let facemesh;
 let video;
 let predictions = [];
 
 function setup() {
	 
   createCanvas(windowWidth, windowHeight);

   video = createCapture(VIDEO);

   video.size(width, height);

 
   facemesh = ml5.facemesh(video, modelReady);
 
   facemesh.on("predict", results => {
	 predictions = results;
   });
 
 
   video.hide();
 }
 
 function modelReady() {
   console.log("Model ready!");
 }
 
 function draw() {
	
   background(0)
   noStroke()
   fill("#2DDFFF");
   ellipse(mouseX, mouseY, 25, 25);
	 translate(windowWidth/2-(width/4.75),windowHeight/2-height/3)
   drawKeypoints();

 
   
 }
 
 function drawKeypoints() {
	
   for (let i = 0; i < predictions.length; i += 1) {
	 const keypoints = predictions[i].scaledMesh;
 
	 // Draw facial keypoints.
	 for (let j = 0; j < keypoints.length; j += 1) {
	   const [x, y] = keypoints[j];
	   
	   fill("#2DDFFF");
	   noStroke();
	   ellipse(x, y, mouseX/200, mouseY/200);
	 }
	 

   }
 }