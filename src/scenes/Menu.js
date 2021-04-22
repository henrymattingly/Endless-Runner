class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload()
    {
        //preload audio
    }

    create()
    {
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
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 30, 'Press ← for Easy or → for Hard', menuConfig).setOrigin(0.5);

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    
  update() {
    if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
      // Novice mode
      game.settings = {
        gameTimer: 60000    
      }
      //this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }
    if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
      // Expert mode
      game.settings = {
        gameTimer: 45000    
      }
      //this.sound.play('sfx_select');
      this.scene.start("playScene");    
    }
  }
}