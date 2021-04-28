class Coin extends Phaser.Physics.Arcade.Sprite{
    constructor( scene, velocity) {
        super(scene, game.config.width + garbageWidth, Phaser.Math.Between(garbageHeight/2, game.config.height - garbageHeight/2), 'coin');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.newCoin = true;
        //this.points = pointValue;
        //this.moveSpeed = game.settings.garbageSpeed;
    }

    update()
    {
        if(this.newCoin && this.x < game.config.width/2)
        {
            this.newCoin = false;

            this.scene.addCoin(this.parent, this.velocity);
        }

        if(this.x < -this.width)
        {
            this.destroy();
        }
        
    }
}