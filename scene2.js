// ============================================
// scene2.js - Scene 2
// ============================================

function drawScene2() {
  background(80, 60, 100);
  
  // Score display
  fill(255, 255, 100);
  textSize(20);
  textAlign(LEFT, TOP);
  text("⭐ Score: " + score, 20, 20);
  
  // Scene number
  textAlign(CENTER, TOP);
  fill(200, 200, 200);
  textSize(16);
  text("Scene 2 of 3", width/2, 20);
  
  // Story text
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You find a mysterious old chest!", width/2, 100);
  
  textSize(18);
  text("What do you do?", width/2, 160);
  
  // Choice 1
  let btn1X = width/2 - 250;
  let btn1Y = 250;
  let btnW = 220;
  let btnH = 80;
  let hover1 = isHover(btn1X, btn1Y, btnW, btnH);
  
  drawButton(btn1X, btn1Y, btnW, btnH, "Open it carefully", hover1);
  
  // Choice 2
  let btn2X = width/2 + 30;
  let hover2 = isHover(btn2X, btn1Y, btnW, btnH);
  
  drawButton(btn2X, btn1Y, btnW, btnH, "Ignore it and\ncontinue walking", hover2);
  
  // Show points on hover
  fill(200, 255, 200);
  textSize(14);
  if (hover1) {
    text("+15 points", btn1X + btnW/2, btn1Y + btnH + 20);
  }
  if (hover2) {
    text("+5 points", btn2X + btnW/2, btn1Y + btnH + 20);
  }
  
  cursor(hover1 || hover2 ? HAND : ARROW);
}

function scene2MousePressed() {
  let btn1X = width/2 - 250;
  let btn1Y = 250;
  let btnW = 220;
  let btnH = 80;
  let btn2X = width/2 + 30;
  
  if (isHover(btn1X, btn1Y, btnW, btnH)) {
    // Open chest - brave choice
    score += 15;
    currentScreen = "scene3";
  } else if (isHover(btn2X, btn1Y, btnW, btnH)) {
    // Ignore - safe choice
    score += 5;
    currentScreen = "scene3";
  }
}
