// JavaScript source code
function setup() {
    cnv = createCanvas(windowWidth , windowHeight);
    cnv.position(0,0);
    background(50);
    createSideButtons();
}

function draw() {
    background(50);
    if (mouseIsPressed)
        ellipse(mouseX, mouseY, 20);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(50);
}