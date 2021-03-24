var canvas;
var music;
var block1,block2,block3,block4;
var ball,music

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);
block1=createSprite(0,580,360,30);
block1.shapeColor="green";
block2=createSprite(0,580,360,30);
block2.shapeColor="blue";
block3=createSprite(0,580,360,30);
block3.shapeColor="pink";
block4=createSprite(0,580,360,30);
block4.shapeColor="yellow";

    if(block1.isTouching(box) && box.bounceOff(block1)){
    box.changeColour(green);
    if(block2.isTouching(box) && box.bounceOff(block)){
    box.changeColour(blue);
    if(block3.isTouching(box) && box.bounceOff(block3)){
    box.changeColour(pink);
    if(block4.isTouching(box) && box.bounceOff(block4)){
    box.changeColour(yellow);

       

    }



    //create box sprite and give velocity
box=createSprite(random(20,750));

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


drawSprites();
    //add condition to check if box touching surface and make it box
}
