function setup() {
createCanvas(600, 400);
background(200, 100, 100);
}

function draw() {
	//background(200, 100, 100);
noStroke();
fill(250, 200, 200, 55);
    ellipse(200,300, 100, 100);
ellipse(mouseX, mouseY, 100, 100);
}