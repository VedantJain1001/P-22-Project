var starImg, fairyImg, bgImg;
var fairy , fairyMusic;
var star, starBody;

function preload(){
    fairyImg = loadAnimation("images/fairy1.png","images/fairy2.png");
    starImg = loadImage("images/star.png");
    fairyMusic = loadSound("sound/JoyMusic.mp3");
    bgImg = loadImage("images/starNight.png");
}

function setup(){
    createCanvas(800, 750);
    fairyMusic.play();

    fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
    star.scale = 0.2;

    keyPressed();
}

function draw(){
    background(bgImg);
    drawSprites();
}


function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		star.y = 500
	}
}