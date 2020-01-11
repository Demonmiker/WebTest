// JavaScript source code
function setup()
{
    createCanvas(500, 500);
}

function draw()
{
    background(0, 0, 0)
    stroke(255);
    if(mouseIsPressed)
        ellipse(mouseX, mouseY, 20, 20);
}
   

    