// JavaScript source code
function setup() {
    var cns = createCanvas(windowWidth - 10, windowHeight - 150);
    cns.parent('canvas_holder')

    background(0); //черный фон
    fill(255, 255, 255);
    noStroke(); // убираю оконтовку у кругов
    colors = [color('red'), color('magenta'),color('lime'),color('blue'),color('purple')]
}

particles = [];

var colors = [];

function draw() //всё что дальше происходит каждый кадр
{
    if (mouseIsPressed) {
        x = mouseX;
        y = mouseY;
        particles.push(new Particle(mouseX, mouseY));
    }
    for (let p of particles) {
        p.update();
        p.show();
    }

}



class Particle {

    constructor(x, y) {
        this.clr = colors[Math.floor(Math.random() * colors.length)];
        this.x = x;
        this.y = y;
        var v = p5.Vector.random2D();
        this.vx = v.x;
        this.vy = v.y;
        this.ax = 0;
        this.ay = 0;
    }

    show() {
        fill(this.clr);
        ellipse(this.x, this.y, 10, 10);
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
}


