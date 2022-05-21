function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL); 

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    rotateX(-PI/8)
    rotateY(frameCount * 0.01);

    noFill();
    stroke(255);

    box(100);

}
