var faces = [];
// var leftEye = [];
// var rightEye = [];
// var head = [];
// var mouth = [];
// var center = [];
// var eyeCenter = [];

var numberOfFaces = 0;

var zoom = 2;

// var button;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  angleMode(DEGREES);

  // button = createButton('Start');
  // button.position(videoSelect.x + videoSelect.width, 65);
  // button.mousePressed(start);
  // button.mousePressed(exampleCode);

}

function draw() {
  numberOfFaces = 0;
  background(255);
  // if (faces.length >= 1) {

    for (var i = 0; i < faces.length; i++) {
      DrawFace(faces[i]);

    // }
  }
  console.log(numberOfFaces + "/" + faces.length);
}

function DrawFace(face) {

  if (face.state === brfv4.BRFState.FACE_TRACKING_START ||
      face.state === brfv4.BRFState.FACE_TRACKING) {
    // fDS : face dots shifted
    numberOfFaces +=1;
  }
}
