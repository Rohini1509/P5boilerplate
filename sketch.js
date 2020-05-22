
var fixedrect, movingrect

function setup()
{

createCanvas(500,500)

fixedrect=createSprite(100,100,60,50);
movingrect=createSprite(200,200,40,50);


}

function draw()

{

background(0);
movingrect.x=World.mouseX;
movingrect.y=World.mouseY;
drawSprites();

}