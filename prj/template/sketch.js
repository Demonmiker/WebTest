// JavaScript source code
function setup() {
    createCanvas(windowWidth*0.99, windowHeight*0.97);
    background(50);
}

function draw() {
    if (mouseIsPressed)
        ellipse(mouseX, mouseY, 20);
}