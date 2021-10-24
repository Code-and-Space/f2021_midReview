let graphene; // Rene
let sheriffHali_bracelet3d; // Hali
let sindhuSriram_FitBit; // Sindhu
let tattooobject; // Sakeena
let thermos;  // Xiaofeng

let bidet; // Sangeetha
let honey; // Ryan
let dollar; // Michael
let laptop; // Sam
let bentonite; // Deron
let spacestation; // Dustin
let plant; // Ben
let eye; // Petreen

// let spacer;
let rotationSpeed = .75;
let margin = 150;


function preload() {
  graphene = loadModel('objects/graphene.obj', true);
  sheriffHali_bracelet3d = loadModel('objects/sheriffHali_bracelet3d.obj', true);
  sindhuSriram_FitBit = loadModel('objects/sindhuSriram_FitBit.obj', true);
  tattooobject = loadModel('objects/tattooobject.obj', true);
  thermos = loadModel('objects/thermos.obj', true);

  // bidet = loadModel('objects/thermos.obj', true);
  // honey = loadModel('objects/thermos.obj', true);
  // dollar = loadModel('objects/thermos.obj', true);
  // laptop = loadModel('objects/thermos.obj', true);
  // bentonite = loadModel('objects/thermos.obj', true);
  // spacestation = loadModel('objects/thermos.obj', true);
  // plant = loadModel('objects/thermos.obj', true);
  // eye = loadModel('objects/thermos.obj', true);
}

let objectArray_row1 = [];
let objectArray_row2 = [];
let objectArray_row3 = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  objectArray_row1 = [graphene, sheriffHali_bracelet3d, sindhuSriram_FitBit, tattooobject, thermos]
  objectArray_row2 = [graphene, sheriffHali_bracelet3d, sindhuSriram_FitBit, tattooobject, thermos]
  objectArray_row3 = [graphene, sheriffHali_bracelet3d, sindhuSriram_FitBit, tattooobject, thermos]

}

function draw() {
  background(0);
  noStroke();

  let spacerX  = (width - (2 * margin)) / 4;
  let spacerY = (height - (2 * margin)) / 2;

  push();
  translate(-width/2+margin, -height/2+margin);


  for (i = 0; i < objectArray_row1.length; i++) {
    push();
    translate(spacerX * i, 0);
    // ambientMaterial(255, 0, 150);
    normalMaterial();
    scale(1);
    rotateX(frameCount * rotationSpeed);
    rotateY(frameCount * rotationSpeed);
    model(objectArray_row1[i]);
    pop();
  }

  // for (i = 0; i < objectArray_row1.length; i++) {
  //   push();
  //   translate(spacerX * i, spacerY);
  //   // ambientMaterial(255, 0, 150);
  //   normalMaterial();
  //   scale(1);
  //   rotateX(frameCount * rotationSpeed);
  //   rotateY(frameCount * rotationSpeed);
  //   model(objectArray_row2[i]);
  //   pop();
  // }
  //
  // for (i = 0; i < objectArray_row1.length; i++) {
  //   push();
  //   translate(spacerX * i, spacerY * 2);
  //   // ambientMaterial(255, 0, 150);
  //   normalMaterial();
  //   scale(1);
  //   rotateX(frameCount * rotationSpeed);
  //   rotateY(frameCount * rotationSpeed);
  //   model(objectArray_row3[i]);
  //   pop();
  // }


  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}









// ortho();
//
// let locX = mouseX - width / 2;
// let locY = mouseY - height / 2;
// // ambientLight(15);
// pointLight(250, 250, 250, locX, locY, 250);
//
// for (x = 0; x <= width; x+= spacer) {
//   locationArray[x] = [];
//   for (y = 0; y <= height; y+= spacer) {
//     locationArray[x][y] = objectArray[y];
//     push();
//     translate(x - width/2, y - height/2);
//     noStroke();
//     ambientMaterial(255, 0, 150);
//     scale(1);
//     rotateX(frameCount * rotationSpeed * x/spacer);
//     rotateY(frameCount * rotationSpeed * y/spacer);
//     model(objectArray[x][y]);
//     pop();
//   }
//
// }
