img = "";
var length = 0;
objects = [];
status1 = "";
alarm = "";
function preload(){
alarm = loadSound("alarm.mp3")
}
function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(400,400);
  video.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Baby";
}
function modelLoaded() {
  console.log("Model Loaded!")
  status1 = true;
}
function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
  length = objects.length;
}
function draw() {
  image(video, 0, 0, 400, 400);
      if(results != "person")
      {
        for (i = 0; i < length ; i++) {
          document.getElementById("status").innerHTML = "Status : Baby is not detected";
          play("alarm.mp3");
        }
      }
}