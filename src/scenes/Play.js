class Play extends Phaser.Scene {
    constructor() {
        super("PlayScene");
    }

    preload(){
        //preload assets for the game here
        //this.load.image('bag','./assets/rocketP1.png');
        this.load.image('background','./assets/grassfield.png');
    }
    
    create(){
        //load assets in the scene
        this.backgound = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);
        
    }

    update(){
        //update game every frame
    }

}