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

        /*
        this.garbage = new Garbage(this, game.config.width, 30, 'garbage',0 , 20).setOrigin(0.5);
        this.garbage2 = new Garbage(this, game.config.width,game.config.height/2, 'garbage', 0, 20).setOrigin(0,0);
        this.garbage3 = new Garbage(this, game.config.width, 400, 'garbage', 0, 10).setOrigin(0,0);
        */

        //set up keys for player input
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //create group for trash to spawn
        var trashGroup = this.physics.add.group({
            key: 'garbage',
            quantity: 5,
            bounceX: 1,
            bounceY: 1,
            collideWorldBounds: true,
            velocityX: 300,
            velocityY: 150
        });
        //randomly spawns all the trashCans
        Phaser.Actions.RandomRectangle(trashGroup.getChildren(), this.physics.world.bounds);
        //adds world bound collider to the trash
        this.physics.add.collider(trashGroup);

        this.physics.add.overlap(trashGroup, bag, this.trashCollision)

    }


    update(){
        //move background
        this.background.tilePositionX -= 1;
/*
        this.garbage.update();
        this.garbage2.update();
        this.garbage3.update();
*/

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

            this.physics.world.collide(bag, this.trashGroup, this.trashCollision, null, this);
        }


    }

    trashCollision()
    {
        bag.destroyed = true;
        bag.destory();
    }

}

// fix spawn location for trash, sometimes spawn on player and instantly ends the game