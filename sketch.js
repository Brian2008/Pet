var dog
var happyDog
var database
var foodStock

function preload()
{
  dog = loadImage('Dog.png')
  happyDog = loadImage('happydog.png')
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(250,250,20,20)
  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(FoodStock);
    dog.addImage(dodHappy)
  }
  drawSprites();
  text("Food:",foodStock,250,50)
  textSize(50)
  fill(white)
  stroke("black")
  readStock();
  writeStock();
  
  //add styles here

}
function readStock(data){
  foodStock-data.val();
}
function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}



