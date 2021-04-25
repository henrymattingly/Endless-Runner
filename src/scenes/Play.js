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

        this.garbageSpeed = -400;
        this.garbageSpeedMax = -1000;
        //load assets in the scene
        this.background = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);

         //create bag
        bag = this.physics.add.sprite(124, game.config.height/2, 'bag').setOrigin(0.5);
        bag.setCollideWorldBounds(true);
        bag.setBounce(1);
        bag.setDragY(500);
        bag.setDragX(500);  
        bag.setMaxVelocity(150,300);
        bag.destroyed = false;

        this.trash = new Garbage(this, game.config.width, 30, 'garbage',0 , 20).setOrigin(0.5);
        this.trash2 = new Garbage(this, game.config.width,game.config.height/2, 'garbage', 0, 20).setOrigin(0,0);
        this.trash3 = new Garbage(this, game.config.width, 400, 'garbage', 0, 10).setOrigin(0,0);

        //set up keys for player input
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

            //set of group for spawning garbage
        this.garbageGroup = this.add.group({
            runChildUpdate: true
        });


        
    }

    //create new garbage and add them to group
    addGarbage()
    {
        let tilt = Phaser.Math.Between(0, 50);
        let garbage = new Garbage(this, this.garbageSpeed - tilt);
        this.garbageGroup.add(garbage);
    }

    update(){
        //move background
        this.background.tilePositionX -= 1;

        this.trash.update();
        this.trash2.update();
        this.trash3.update();

        //allows bag to move
        if(!bag.destroyed)
        {
            if(keyUP.isDown)
            {
                bag.body.velocity.y -= bagVelocity;
            }
            if (keyDOWN.isDown)
            {
                bag.body.velocity.y += bagVelocity;
            }
            if(keyRIGHT.isDown)
            {
                bag.body.velocity.x += bagVelocity;
            }
            if (keyLEFT.isDown)
            {
                bag.body.velocity.x -= bagVelocity;
            }

            //this.physics.world.collide(bag, this.garbageGroup, this.trashCollision, null, this);
        }


    }

    checkCollision(bag, trash) {
        // simple AABB checking
        if (bag.x < trash.x + trash.width && 
            bag.x + trash.width > trash.x && 
            bag.y < trash.y + trash.height &&
            bag.height + bag.y > trash. y) {
                return true;
        } else {
            return false;
        }
    }

    trashCollision()
    {
        bag.destroyed = true;
        bag.destory();
    }

}