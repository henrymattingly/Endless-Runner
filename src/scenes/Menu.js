class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload()
    {
        //preload audio
        this.load.audio('music', './assets/Plastic_Bag_by_Katy_Perry.mp3');
        this.load.audio('paper', './assets/papergrab.mp3');
        this.load.audio('trashcan', './assets/trashcan.mp3');

        this.load.image('menu', './assets/menu.png');
    }

    create()
    {
      this.menu = this.add.tileSprite(100,75, 440, 330, 'menu').setOrigin(0,0);
     
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    
  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT) || Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      this.scene.start("playScene");    
    }  
  }
}