class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        //preload assets for the game here
        this.load.image('bag','./assets/rocketP1.png');
        this.load.image('background','./assets/grassfield.png');
    }
    
    create(){
        //load assets in the scene
        this.background = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);
        this.Bag = new Bag(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'bag').setOrigin(0.5, 0);

        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update(){
        //allows bag to move
        this.Bag.update();

        //move background
        this.background.tilePositionX -= 1;
    }

}