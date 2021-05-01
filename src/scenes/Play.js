class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload(){
        //preload assets for the game here
        this.load.image('bag','./assets/pinkplastic.png');
        this.load.image('background','./assets/city.png');
        this.load.image('moon', './assets/moon.png');
        this.load.image('street', './assets/street.png');
        this.load.image('garbage', './assets/trashcan.png');
        this.load.image('coin', './assets/blueplastic.png');
    }
    
    create(){
        //play audio
        this.sound.play('music');


        this.garbageSpeed = -400;
        this.garbageSpeedMax = -1000;


        //load assets in the scene
        this.background = this.add.tileSprite(0,0,640,480,'background').setOrigin(0,0);
        this.moon = this.add.tileSprite(0,0,640,480,'moon').setOrigin(0,0);
        this.street = this.add.tileSprite(0,0,640,480,'street').setOrigin(0,0);

         //create bag with physics
        bag = this.physics.add.sprite(124, game.config.height/2, 'bag').setOrigin(0.5);
        bag.setCollideWorldBounds(true);
        bag.setBounce(1);
        bag.setDragY(500);
        bag.setDragX(500);  
        bag.setMaxVelocity(250,250);
        bag.destroyed = false;


        //set up keys for player input
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

        //creates trash in a group

        this.trashGroup = this.add.group({
            runChildUpdate: true
        });

        this.coinGroup = this.add.group({
            runChildUpdate: true
        });

        //creates time delay between each trash spawn
        this.time.delayedCall(1500, () => {
            this.addTrash();
        });
        

        this.time.delayedCall(2000, () => {
            this.addCoin();
        });

        this.score = 0;

        // display score
        this.scoreLeft = this.add.text(0, 0, this.score,{fontSize: '32px', fill: '#ecf0f1'});

    }

    //adds trash to the scene
    addTrash()
    {
        let tilt = Phaser.Math.Between(0, 50);
        let trash = new Garbage(this, this.garbageSpeed - tilt);
        this.trashGroup.add(trash);
    }
    
    //add coin to group
    addCoin()
    {
        let tilt = Phaser.Math.Between(0, 50);
        let coin = new Coin(this, this.garbageSpeed - tilt);
        this.coinGroup.add(coin);
    }

    update(){
        //move background
        this.background.tilePositionX += .6;
        this.moon.tilePositionX += .2;
        this.street.tilePositionX += 1.1

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

            //checks if the bag collides with any of the trash 
            this.physics.world.collide(bag, this.trashGroup, this.trashCollision, null, this);

            //checks if bag overlaps with coin
            this.physics.world.overlap(bag, this.coinGroup, this.coinCollide, null, this);
        }


    }
    //adds points to score on collision with coin
    // destory coin on collide
    coinCollide()
    {
        this.sound.play('paper');
        this.score += 10;
        this.scoreLeft.text = this.score;

        //help from TA to destory instance of coin on collision
        var minDis = 100000;
        var temp = null;
        this.coinGroup.getChildren().forEach(function(coin){
            var dis = Math.sqrt(Math.pow(coin.x-bag.x,2) + Math.pow(coin.y - bag.y,2));
            if(dis < minDis){
                temp = coin;
                minDis = dis;
            }
        })
        temp.destroy();

    }
    //when bag collides with trash
    trashCollision()
    {
        this.sound.play('trashcan');
        bag.destroyed = true;
        bag.destroy();
    }
}