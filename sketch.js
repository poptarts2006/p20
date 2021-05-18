var cat, mouse, canvas, bg;

function preload() {
    bg = loadImage ('garden.png');
    cat1 = loadAnimation ('cat1.png');
    cat2 = loadAnimation ('cat2.png', 'cat3.png');
    cat3 = loadAnimation ('cat4.png');
    
    mouse1 = loadAnimation ('mouse1.png');
    mouse2 = loadAnimation ('mouse2.png', 'mouse3.png');
    mouse3 = loadAnimation ('mouse4.png');
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite (870, 600);
    cat.addAnimation ('catsleeping', cat1);
    cat.scale = 0.2;

    mouse = createSprite (200, 600)
    mouse.addAnimation("mouseStanding", mouse1);
    mouse.scale = 0.15;
}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouse3);
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", cat2);
        cat.changeAnimation("catRunning");
        
        mouse.addAnimation("mouseTeasing", mouse2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}
