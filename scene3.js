// ============================================
// scene3.js - Scene 3 (Final Choice)
// ============================================

function drawScene3() {
  background(100, 50, 80);
  
  // Score display
  fill(255, 255, 100);
  textSize(20);
  textAlign(LEFT, TOP);
  text("⭐ Score: " + score, 20, 20);
  
  // Scene number
  textAlign(CENTER, TOP);
  fill(200, 200, 200);
  textSize(16);
  text("Scene 3 of 3 - Final Choice!", width/2, 20);
  
  // Story text
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You reach the heart of the forest.", width/2, 100);
  text("A wise old owl appears before you.", width/2, 140);
  
  textSize(18);
  text('"Prove your worth," says the owl.', width/2, 190);
  text("How do you respond?", width/2, 230);
  
  // Choice 1
  let btn1X = width/2 - 250;
  let btn1Y = 300;
  let btnW = 220;
  let btnH = 80;
  let hover1 = isHover(btn1X, btn1Y, btnW, btnH);
  
  drawButton(btn1X, btn1Y, btnW, btnH, "Share your\nadventure stories", hover1);
  
  // Choice 2
  let btn2X = width/2 + 30;
  let hover2 = isHover(btn2X, btn1Y, btnW, btnH);
  
  drawButton(btn2X, btn1Y, btnW, btnH, "Stay silent and\nbow respectfully", hover2);
  
  // Show points on hover
  fill(200, 255, 200);
  textSize(14);
  if (hover1) {
    text("+20 points", btn1X + btnW/2, btn1Y + btnH + 20);
  }
  if (hover2) {
    text("+10 points", btn2X + btnW/2, btn1Y + btnH + 20);
  }
  
  cursor(hover1 || hover2 ? HAND : ARROW);
}

function scene3MousePressed() {
  let btn1X = width/2 - 250;
  let btn1Y = 300;
  let btnW = 220;
  let btnH = 80;
  let btn2X = width/2 + 30;
  
  if (isHover(btn1X, btn1Y, btnW, btnH)) {
    // Share stories - best choice
    score += 20;
    // Check ending
    if (score >= 30) {
      currentScreen = "good";
    } else {
      currentScreen = "bad";
    }
  } else if (isHover(btn2X, btn1Y, btnW, btnH)) {
    // Stay silent - okay choice
    score += 10;
    // Check ending
    if (score >= 30) {
      currentScreen = "good";
    } else {
      currentScreen = "bad";
    }
  }
}
