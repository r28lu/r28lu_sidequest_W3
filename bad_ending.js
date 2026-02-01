// ============================================
// bad_ending.js - Bad Ending
// ============================================

function drawBadEnding() {
  background(80, 40, 60);
  
  // Title
  fill(200, 100, 100);
  textSize(52);
  textAlign(CENTER, CENTER);
  text("😔 Not Quite... 😔", width/2, 120);
  
  // Ending text
  fill(220, 220, 220);
  textSize(22);
  text("The owl shakes its head sadly.", width/2, 200);
  text("You need to be braver next time!", width/2, 240);
  
  // Final score
  fill(255, 200, 200);
  textSize(28);
  text("Final Score: " + score + " points", width/2, 310);
  
  fill(200);
  textSize(18);
  text("(You needed 30+ points for the good ending)", width/2, 350);
  
  // Replay button
  let btnX = width/2 - 100;
  let btnY = 420;
  let btnW = 200;
  let btnH = 60;
  let hover = isHover(btnX, btnY, btnW, btnH);
  
  drawButton(btnX, btnY, btnW, btnH, "TRY AGAIN", hover);
  
  cursor(hover ? HAND : ARROW);
  
  // Hint
  fill(200);
  textSize(14);
  text("Press R to restart", width/2, 530);
}

function badEndingMousePressed() {
  let btnX = width/2 - 100;
  let btnY = 420;
  let btnW = 200;
  let btnH = 60;
  
  if (isHover(btnX, btnY, btnW, btnH)) {
    currentScreen = "start";
  }
}
