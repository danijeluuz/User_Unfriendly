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



//posnet
let img1;
let video;
let poseNet;
let poses = [];
let bg = "rgb(220,220,220)";

function setup() {

  createCanvas(windowWidth, windowHeight);

  //camera
  video = createCapture(VIDEO);
  video.hide();

  

  //ml5
  //instanzia posnet
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", function (results) {
  poses = results;
  });
}

function modelReady() {
  console.log("Model Loaded");
}

function draw() {


  background("#2DDFFF");
  noStroke()
  fill(0)
  ellipse(mouseX, mouseY, 25, 25);
  if(mouseX<windowWidth/4 && mouseX>windowWidth/20 && mouseY<windowHeight/4){
	image(video, windowWidth/2-video.width/2,windowHeight/2-video.height/2+50)
}
  translate(windowWidth/2-video.width/2,windowHeight/2-video.height/2+50)
 
  drawKeypoints();

 
}



function drawKeypoints() {
  let i = 0;
  //se la webcam riconsoce una persona
  if (poses[0]) {
    //se esite una persona prendiamo le sue posizioni
    let pose = poses[i].pose;
    
    let nose = pose.nose;

    
    if (nose.x > width / 2) {
      bg = "rgba(220,220,220,1)";
    } else {
      bg = "rgba(150,0,150,1)";
    }

    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.score > 0) {
        if (keypoint.part == "nose") {
        fill("red")
        ellipse(keypoint.position.x, keypoint.position.y, 100, 100);      
   }
        noStroke();
      }
    }
  }
}



//salvo il file
function keyPressed() {
  if (key == "s") {
    save(
      day() +
        "" +
        month() +
        "" +
        year() +
        "" +
        second() +
        "" +
        minute() +
        "" +
        hour() +
        "_canvas.png"
    );
  }
}



	
  

