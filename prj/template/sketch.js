// JavaScript source code
function setup() {
    cnv = createCanvas(windowWidth , windowHeight);
    //cnv.position(0,0);
    background(50);
}

function draw() {
    if (mouseIsPressed)
        ellipse(mouseX, mouseY, 20);
}