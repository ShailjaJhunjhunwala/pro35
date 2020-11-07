var dog, happyDog,dogHappy, database, foodS, foodStock,food,foodImg;
var foodGroup;

function preload()
{
  dogHappy = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  foodImg = loadImage("images/Milk.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database()
  console.log(database)
  dog = createSprite(400,250,20,20)
  dog.addImage(dogHappy)
  dog.scale = 0.2
  foodGroup = new Group();
  foodStock = database.ref("food")
  foodStock.on("value",readStock)
}

function draw() {  
  background(46, 139)
  textSize(18)
  text("Food Left = "+ foodS,100,100)
  if(keyIsDown(UP_ARROW)){
    dog.addImage(happyDog)
    foodS--
    writeStock(foodS);
    foodGroup.get(i).destroy();
    //foodGroup.destroyEach()
  }
  if(keyIsDown(RIGHT_ARROW)){
    foodS = 20
    writeStock(foodS);
  }
  for(i = 30 ;i <300; i = i+27){
    food = createSprite(i,200,10,10)
    food.addImage(foodImg)
    food.scale = 0.05
    foodGroup.add(food)
    if(keyIsDown(UP_ARROW)){
    foodGroup.get(i).destroy();
    }
  }
  for(i = 30 ;i <300; i = i+27){
    food = createSprite(i,250,10,10)
    food.addImage(foodImg)
    food.scale = 0.05
    foodGroup.add(food)
    if(keyIsDown(UP_ARROW)){
    foodGroup.get(i).destroy();
    }
  }

  drawSprites();
}
function readStock(data){
foodS = data.val();
console.log(foodS)
}
function writeStock(x){
database.ref("/").update({
  food:x
})
}
function destroy(){
  fruits.visible = false
} 
