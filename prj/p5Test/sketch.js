// JavaScript source code
function setup()
{
    createCanvas(500, 500);
    background(0, 0, 0);
    noStroke();
    
}

var alpha = 0;

function draw()
{
    fill(255, 255, 255, alpha);
    if (mouseIsPressed) { ellipse(mouseX, mouseY, 20, 20); alpha++ }
    else { alpha = 0; }

}
   

    