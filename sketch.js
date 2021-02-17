var canvas;
var music;
var block1;
var block2;
var block3;
var block4;
var ball;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(100,580,200,35)
    block1.shapeColor = "blue"

    block2 = createSprite(300,580,200,35)
    block2.shapeColor = "yellow"

    block3 = createSprite(500,580,200,35)
    block3.shapeColor = "pink"

    block4 = createSprite(700,580,200,35)
    block4.shapeColor = "green"

    ball = createSprite(random(50,750),50,20,20)
    ball.velocityY = 5
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites()
    ball.bounceOff(edges)
   // ball.bounceOff(block1)
   // ball.bounceOff(block2)
    //ball.bounceOff(block3)
    //ball.bounceOff(block4)
    
    if(block1.isTouching(ball)){
        console.log("running")
        ball.shapeColor = color(0,0,255)
        ball.velocityY = 0
    }
    if(ball.isTouching(block2)){
        ball.shapeColor = color("yellow")
        ball.velocityY = 0
    }
    if(ball.isTouching(block3)){
        ball.shapeColor = color("pink")
        ball.velocityY = 0
    }
    if(ball.isTouching(block4)){
        ball.shapeColor = color("green")
        ball.velocityY = 0
    }
    
    drawSprites()
    //add condition to check if box touching surface and make it box
    
}
