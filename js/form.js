class Form{
    constructor(){
        this.button = createButton("Feed the dog")
        this.button1 = createButton("Add food")
    }
    display(){
        console.log("display")
        var title = createElement("H2")
        title.html("Virtual Pet")
        title.position(displayWidth/2-50,10)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.button.mousePressed(()=>{
            foodS--
            writeStock(foodS);
        })
        this.button1.position(displayWidth/2+30,displayHeight/2)
        this.button1.mousePressed(()=>{
            foodS = 20
            writeStock(foodS);
        })
    }
}