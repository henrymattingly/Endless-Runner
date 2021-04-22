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
        this.backgound = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);
        this.Bag = new Bag(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'Bag').setOrigin(0.5, 0);
        //this.bag = new Bag(this, game.config.width/2, game.config.height - borderUISize - borderPadding, 'bag').setOrigin(0.5, 0);
    }

    update(){
        //update game every frame
    }

}