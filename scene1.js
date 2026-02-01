// ============================================
// scene1.js - Scene 1
// ============================================

function drawScene1() {
  background(50, 100, 50);
  
  // Score display
  fill(255, 255, 100);
  textSize(20);
  textAlign(LEFT, TOP);
  text("⭐ Score: " + score, 20, 20);
  
  // Scene number
  textAlign(CENTER, TOP);
  fill(200, 200, 200);
  textSize(16);
  text("Scene 1 of 3", width/2, 20);
  
  // Story text
  fill(255);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("You enter a magical forest.", width/2, 100);
  text("A fork in the path appears ahead.", width/2, 140);
  
  textSize(18);
  text("Which way do you go?", width/2, 200);
  
  // Choice 1
  let btn1X = width/2 - 250;
  let btn1Y = 280;
  let btnW = 220;
  let btnH = 80;
  let hover1 = isHover(btn1X, btn1Y, btnW, btnH);
  
  drawButton(btn1X, btn1Y, btnW, btnH, "Left Path\n(Bright sunlight)", hover1);
  
  // Choice 2
  let btn2X = width/2 + 30;
  let hover2 = isHover(btn2X, btn1Y, btnW, btnH);
  
  drawButton(btn2X, btn1Y, btnW, btnH, "Right Path\n(Dark and mysterious)", hover2);
  
  // Show what each choice does when hovering
  fill(200, 255, 200);
  textSize(14);
  if (hover1) {
    text("+10 points", btn1X + btnW/2, btn1Y + btnH + 20);
  }
  if (hover2) {
    text("+5 points", btn2X + btnW/2, btn1Y + btnH + 20);
  }
  
  cursor(hover1 || hover2 ? HAND : ARROW);
}

function scene1MousePressed() {
  let btn1X = width/2 - 250;
  let btn1Y = 280;
  let btnW = 220;
  let btnH = 80;
  let btn2X = width/2 + 30;
  
  if (isHover(btn1X, btn1Y, btnW, btnH)) {
    // Left path - better choice
    score += 10;
    currentScreen = "scene2";
  } else if (isHover(btn2X, btn1Y, btnW, btnH)) {
    // Right path - risky choice
    score += 5;
    currentScreen = "scene2";
  }
}
