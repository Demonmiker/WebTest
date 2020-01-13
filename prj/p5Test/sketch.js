// JavaScript source code
function setup() {
    tr_var_changed();
    w = windowWidth - 10;
    h = windowHeight - 150;
    var cns = createCanvas(w, h);
    cns.parent('canvas_holder')
    
    background(0); //черный фон
    noStroke(); // убираю оконтовку у кругов
    colors = [color('red'), color('magenta'),color('lime'),color('blue'),color('purple'),color('yellow')]
}

particles = [];
var w;
var h;
var colors = [];

function draw() //всё что дальше происходит каждый кадр
{
    let alpha = parseInt(tr_par2);
    background(color(0, 0, 0, alpha));
    if (mouseIsPressed) {
        x = mouseX;
        y = mouseY;
        for (let i = 0; i < tr_par;i++)
            particles.push(new Particle(mouseX, mouseY));
    }
    for (let i = 0; i < particles.length; i++) {
        if (particles[i].x < 0 || particles[i].x > w || particles[i].y < 0 || particles[i].y > h)
            particles.splice(i, 1);
       
    }
    for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].show();
    }

    document.getElementById("out").innerHTML = particles.length

}
   

var tr_par;
var tr_par2;
function tr_var_changed() {
    tr_par = document.getElementById("tr_par").value;
    document.getElementById("track").value = tr_par;
    tr_par2 = document.getElementById("tr_par2").value;
    document.getElementById("track2").value = tr_par2;
}


class Particle {

    constructor(x, y) {
        this.clr = colors[Math.floor(Math.random() * colors.length)];
        this.x = x;
        this.y = y;
        var v = p5.Vector.random2D();
        v.setMag(Math.random() * 5);
        this.vx = v.x;
        this.vy = v.y;
        this.ax = 0;
        this.ay = 0.05;
    }

    show() {
        fill(this.clr);
        ellipse(this.x, this.y, 7, 7);
    }

    update() {
        this.vx += this.ax;
        this.vy += this.ay;
        this.x += this.vx;
        this.y += this.vy;
    }
}


