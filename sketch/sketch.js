
//this creates the background and the size of the canvas
function setup() {
    createCanvas(1000,1000)
    background(255)
}

//these is the shapes that craetes the house
function draw() {
    fill (255, 130, 0)
    stroke(0)
    house(100, 100, 50, 60)
    house(200, 100, 70, 90)
    house(300, 100, 30, 50)
}
//they are the point of the coordinates for the square and the rect is wihtin the swaure function
function square(x, y, size) {
    rect(x, y, size, size)
}

function roof(x, y, size){
triangle(x, y, (x+size/2), (y-size), (x+size), y)
}

function house(x, y, size) {
square(x, y, size)
roof(x, y, size)


}