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
        //preload assets for the game here
        this.load.image('background','./assets/city.png');
        this.load.image('moon', './assets/moon.png');
        this.load.image('street', './assets/street.png');
    }

    create()
    {
        this.background = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);
        this.moon = this.add.tileSprite(0,0,640,480,'moon').setOrigin(0,0);
        this.street = this.add.tileSprite(0,0,640,480,'street').setOrigin(0,0);
        //menu text fongiguration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
            // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'Endless Runner', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use arrows to move', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 30, 'Press ← or → to play', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    
  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT) || Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      //this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }  
    this.background.tilePositionX += .6;
    this.moon.tilePositionX += .2;
    this.street.tilePositionX += 1.1
  }
}