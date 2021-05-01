let config = {
    type : Phaser.CANVAS,
    width : 640,
    height : 480,
    physics : {
        default: 'arcade',
        arcade:{
            //debug: true
        }
    },
    scene : [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyUP, keyDOWN, keyLEFT, keyRIGHT;
let bag = null;
const bagVelocity = 40;
const garbageWidth = 88;
const garbageHeight = 88;
