// ============================================
// start.js - Start Screen
// ============================================

function drawStart() {
  background(30, 40, 60);
  
  // Title
  fill(255, 200, 100);
  textSize(48);
  textAlign(CENTER, CENTER);
  text("🌟 The Magic Forest 🌟", width/2, 150);
  
  // Subtitle
  fill(200, 200, 200);
  textSize(18);
  text("A Simple Interactive Story", width/2, 210);
  
  // Instructions
  textSize(16);
  text("Make choices to explore the forest.", width/2, 280);
  text("Your decisions will determine your fate!", width/2, 310);
  
  // Start button
  let btnX = width/2 - 100;
  let btnY = 400;
  let btnW = 200;
  let btnH = 60;
  let hover = isHover(btnX, btnY, btnW, btnH);
  
  drawButton(btnX, btnY, btnW, btnH, "START GAME", hover);
  
  // Change cursor
  cursor(hover ? HAND : ARROW);
  
  // Hint
  fill(150);
  textSize(14);
  text("Press ENTER to start", width/2, 520);
}

function startMousePressed() {
  let btnX = width/2 - 100;
  let btnY = 400;
  let btnW = 200;
  let btnH = 60;
  
  if (isHover(btnX, btnY, btnW, btnH)) {
    resetScore();
    currentScreen = "scene1";
  }
}
