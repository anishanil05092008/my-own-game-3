class Form {
    constructor(){
        this.title = createElement('h1');
       this.input = createInput('Enter Your Name');
       this.button = createButton('START') 
       this.instructions = createElement('textarea');
       this.image = loadImage("IMAGES/mainbackground.png");
       this.character1 = loadImage("IMAGES/character1forform.png");
       this.character2 = loadImage("IMAGES/character2forform.png");
       this.greeting = createElement('h2');
    }


display(){
    background(this.image);
    //image(this.image, 0, 0, displayWidth, displayHeight);
    this.title.html("CHEST COLLECTOR");
    this.title.position(displayWidth/2 - 130, 0);

    this.instructions.html(" INSTRUCTIONS :  W - UP , D - RIGHT , A - LEFT , S - DOWN , E - PICK , F - OPEN THE DOOR");
    this.instructions.position(displayWidth/2 - 225 , displayHeight - 200 );

    this.input.position(displayWidth/2 - 50,displayHeight/2-150);
    this.input.size(200);
    this.button.position(displayWidth/2 + 1,displayHeight/2 -100);

    image(this.character1,displayWidth/2 - 50,displayHeight/2 - 650);
    image(this.character2,displayWidth/2 - 1050,displayHeight/2 - 650);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.image.hide();
        this.character1.hide();
        this.character2.hide();
        this.instructions.hide();
        this.title.hide();
        this.button.hide();
        playerCount.name = this.input.value();
        playerCount+=1;
        playerCount.index = playerCount;
        playerCount.update();
        playerCount.updateCount(playerCount);
        this.greeting.html('Hello'+playerCount.name+"Waiting For The Other Player To Join");
        this.greeting.position(displayWidth/2 - 70,displayHeight/4);
    });

}

}