class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        //preload assets for the game here
        this.load.image('bag','./assets/rocketP1.png');
        this.load.image('background','./assets/grassfield.png');
        this.load.image('garbage', './assets/spongboob.png');
    }
    
    create(){
        //load assets in the scene
        this.background = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);

         //create bag
        this.Bag = new Bag(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'bag').setOrigin(0.5, 0);

        this.add.rectangle(0, 0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(0, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0 ,0);

        //create the trash asset
        //this.garbage = new Garbage(this,game.config.width + borderUISize * 3, borderUISize*5 + borderPadding * 2, 'garbage', 0, 20).setOrigin(0, 0);
        this.garbage = new Garbage(this, game.config.width, borderUISize*6 + borderPadding*4, 'garbage', 0, 10).setOrigin(0,0);

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    }

    update(){
        
        //allows bag to move
        this.Bag.update();
        this.garbage.update();

        //move background
        this.background.tilePositionX -= 1;

    }

}