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
  bidet = loadModel('objects/Sangeetha__ObjectBidet.obj', true);
  honey = loadModel('objects/HoneyC.obj', true);
  bee = loadModel('objects/Bee3.obj', true);
  dollar = loadModel('objects/dollar.obj', true);
  laptop = loadModel('objects/laptopmodel.obj', true);
  bentonite = loadModel('objects/LipStick.obj', true);
  spacestation = loadModel('objects/test02.obj', true);
  plant = loadModel('objects/elip.obj', true);
  eye = loadModel('objects/Eye.obj', true);
  atm = loadModel('objects/ATM.obj', true);
}

let objectArray_row1 = [];
let objectArray_row2 = [];
let objectArray_row3 = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  objectArray_row1 = [graphene, sheriffHali_bracelet3d, sindhuSriram_FitBit, tattooobject, thermos]
  objectArray_row2 = [bidet, honey, bee, dollar, spacestation]
  objectArray_row3 = [bentonite, eye, laptop, plant, atm]

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

  for (i = 0; i < objectArray_row2.length; i++) {
    push();
    translate(spacerX * i, spacerY);
    // ambientMaterial(255, 0, 150);
    normalMaterial();
    scale(1);
    rotateX(frameCount * rotationSpeed);
    rotateY(frameCount * rotationSpeed);
    model(objectArray_row2[i]);
    pop();
  }

  for (i = 0; i < objectArray_row3.length; i++) {
    push();
    translate(spacerX * i, spacerY * 2);
    // ambientMaterial(255, 0, 150);
    normalMaterial();
    scale(1);
    rotateX(frameCount * rotationSpeed);
    rotateY(frameCount * rotationSpeed);
    model(objectArray_row3[i]);
    pop();
  }


  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}







