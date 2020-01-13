// JavaScript source code
function setup() {
    tr_var_changed();
    w = windowWidth - 10;
    h = windowHeight - 150;
    var cns = createCanvas(w, h);
    cns.parent('canvas_holder')
    
    background(0); //черный фон
    noStroke(); // убираю оконтовку у кругов
    colors = [color('red'), color('magenta'), color('lime'), color('SlateBlue'), color('Orchid'), color('yellow'), color('CornflowerBlue'), color('orange'), color('GreenYellow'), color('LightSeaGreen '), color('Plum')]
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
var tr_par3;
var ch1;
function tr_var_changed() {
    tr_par = document.getElementById("tr_par").value;
    document.getElementById("track").value = tr_par;
    tr_par2 = document.getElementById("tr_par2").value;
    document.getElementById("track2").value = tr_par2;
    tr_par3 = document.getElementById("tr_par3").value;
    document.getElementById("track3").value = tr_par3;

    ch1 = document.getElementById("ch1").checked;
}


class Particle {

    constructor(x, y) {
        this.clr = colors[Math.floor(Math.random() * colors.length)];
        this.x = x;
        this.y = y;
        if (ch1) {
            let rnd = random(-1, 1);
            let rn = rnd / Math.abs(rnd);
            this.vx = (3 * rn) + random(-0.1,0.1);
            this.vy = -1.5 + random(-0.2, 0.1);
            this.ax = -0.04 * rn
            this.ay = 0;
        }
        else {
            var v = p5.Vector.random2D();
            v.setMag(Math.random() * 5);
            this.vx = v.x;
            this.vy = v.y;
            this.ax = 0;
            this.ay = 0; 
        }
       
    }

    show() {
        noStroke();
        fill(this.clr);
        ellipse(this.x, this.y, 7, 7);
    }

    update() {
        this.vx += this.ax;
        this.vy += this.ay + parseFloat(tr_par3);
        this.x += this.vx;
        this.y += this.vy;
    }
}


