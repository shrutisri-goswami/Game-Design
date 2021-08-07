var bird;
var birdImg;
var treeImg, treeImg2;
var backgroundImg;
var ground;

function preload() {
    backgroundImg = loadImage('images/Background.jpg');
    birdImg = loadAnimation('images/Bird1.PNG', 'images/Bird2.PNG', 'images/Bird3.PNG', 'images/Bird4.PNG', 'images/Bird5.PNG', 'images/Bird6.PNG', 'images/Bird7.PNG', 'images/Bird8.PNG', 'images/Bird9.PNG');
    treeImg = loadImage('images/Tree.png');
    treeImg2 = loadImage('images/Tree2.jpg');
}

function setup() {
    createCanvas(1500, 700);
    ground = createSprite(630, 350);
    ground.addImage(backgroundImg);
    ground.scale = 2
    ground.velocityX = -2;
    bird = createSprite(100, 300, 50, 50);
    bird.addAnimation('bird', birdImg);

}

function draw() {
    background("white");

    if (ground.x < 250) {
        ground.x = ground.width / 2
    }

    if (keyCode === 32) {
        bird.velocityY = -15;
    }
    bird.velocityY = bird.velocityY + 0.8

    spawnObstacles();

    drawSprites();
}


function spawnObstacles() {

}





