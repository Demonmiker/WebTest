// JavaScript source code

var cns;
var w;
var h;
//
let model;
//
let curColor = 'blue';
let state = 0;
let btn_t;
//
function setup() {
    //
    btn_t = document.getElementById("btn_train");
    //
    w = windowWidth - 10;
    h = windowHeight - 170;
    cns = createCanvas(w, h);
    cns.parent('canvas_holder');
    //
    noStroke();
    background('DarkGreen'); 
    frameRate(30);
    //
    let options = {
        inputs: ['x', 'y'],
        outpu: ['label'],
        task: 'classification',
        //debug: 'true'
    }
    model = ml5.neuralNetwork(options);
}

function draw() {
    if (mouseIsPressed) {
        let inputs = {
            x: mouseX,
            y: mouseY
        }
        if (state == 0) {

            let target = {
                color: curColor
            }
            model.addData(inputs, target);
            fill(color(curColor));
            ellipse(mouseX, mouseY, 25);
        }
        else if (state == 2) {
            model.classify(inputs, getResults);
        }
    }
}



function getResults(error, results) {
    if (error) { console.log(error); return; }
    //console.log(results)
    
    fill(color(results[0].label));
    ellipse(mouseX, mouseY, 25);

}

function disable(button) {
    btn = document.getElementById(button);
    btn.onclick = "";
    btn.style.backgroundColor = 'gray';
}


function btn_blue() {
    curColor = 'blue';
}

function btn_red(){
    curColor = 'red';
}

function btn_yellow(){
    curColor = 'yellow';
}

function btn_train() {
    disable("btn_1"); disable("btn_2"); disable("btn_3"); disable("btn_train");
    background('DarkGreen'); 
    state = 1;
    model.normalizeData();
    btn_t.disable = true;
    let options = {
        epochs: 200
    }
    model.train(options, whileTraining, finishedTraining);
}

function whileTraining(epoch, loss) {
    btn_t.value = `${epoch}`;
}

function finishedTraining() {
    console.log('finished');
    btn_t.value = 'Done';
    state = 2;
}