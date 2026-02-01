// ============================================
// good_ending.js - Good Ending
// ============================================

function drawGoodEnding() {
  background(50, 150, 100);
  
  // Celebration effect
  fill(255, 255, 100, 150);
  noStroke();
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    ellipse(x, y, 30, 30);
  }
  
  // Title
  fill(255, 255, 100);
  textSize(52);
  textAlign(CENTER, CENTER);
  text("🎉 SUCCESS! 🎉", width/2, 120);
  
  // Ending text
  fill(255);
  textSize(22);
  text("The owl smiles and grants you a wish!", width/2, 200);
  text("You've proven yourself worthy!", width/2, 240);
  
  // Final score
  fill(255, 255, 150);
  textSize(28);
  text("Final Score: " + score + " points", width/2, 310);
  
  // Replay button
  let btnX = width/2 - 100;
  let btnY = 400;
  let btnW = 200;
  let btnH = 60;
  let hover = isHover(btnX, btnY, btnW, btnH);
  
  drawButton(btnX, btnY, btnW, btnH, "PLAY AGAIN", hover);
  
  cursor(hover ? HAND : ARROW);
  
  // Hint
  fill(200);
  textSize(14);
  text("Press R to restart", width/2, 510);
}

function goodEndingMousePressed() {
  let btnX = width/2 - 100;
  let btnY = 400;
  let btnW = 200;
  let btnH = 60;
  
  if (isHover(btnX, btnY, btnW, btnH)) {
    currentScreen = "start";
  }
}
