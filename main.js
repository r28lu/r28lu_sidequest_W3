// ============================================
// main.js - The Router
// ============================================

// Current screen tracker
let currentScreen = "start";

// Player score (Bonus feature!)
let score = 0;

// Reset score when starting new game
function resetScore() {
  score = 0;
}

// Setup - runs once
function setup() {
  createCanvas(700, 600);
  textFont("Arial");
}

// Draw - runs every frame
function draw() {
  // Route to correct screen
  if (currentScreen === "start") {
    drawStart();
  } else if (currentScreen === "scene1") {
    drawScene1();
  } else if (currentScreen === "scene2") {
    drawScene2();
  } else if (currentScreen === "scene3") {
    drawScene3();
  } else if (currentScreen === "good") {
    drawGoodEnding();
  } else if (currentScreen === "bad") {
    drawBadEnding();
  }
}

// Handle mouse clicks
function mousePressed() {
  if (currentScreen === "start") {
    startMousePressed();
  } else if (currentScreen === "scene1") {
    scene1MousePressed();
  } else if (currentScreen === "scene2") {
    scene2MousePressed();
  } else if (currentScreen === "scene3") {
    scene3MousePressed();
  } else if (currentScreen === "good") {
    goodEndingMousePressed();
  } else if (currentScreen === "bad") {
    badEndingMousePressed();
  }
}

// Handle key presses
function keyPressed() {
  if (currentScreen === "start" && keyCode === ENTER) {
    resetScore();
    currentScreen = "scene1";
  }
  
  // R to restart from any ending
  if ((currentScreen === "good" || currentScreen === "bad") && key === "r") {
    currentScreen = "start";
  }
}

// Helper: check if mouse is over a button
function isHover(x, y, w, h) {
  return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
}

// Helper: draw a button
function drawButton(x, y, w, h, label, hover) {
  // Button background
  fill(hover ? color(100, 200, 255) : color(80, 150, 220));
  noStroke();
  rect(x, y, w, h, 10);
  
  // Button text
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(label, x + w/2, y + h/2);
}
