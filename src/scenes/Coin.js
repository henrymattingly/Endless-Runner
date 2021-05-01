class Coin extends Phaser.Physics.Arcade.Sprite{
    constructor( scene, velocity) {
        super(scene, game.config.width + 32, Phaser.Math.Between(16, game.config.height - 16), 'coin');
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
        //spawn new coin when current one reaches middle of map
        if(this.newCoin && this.x < game.config.width/2)
        {
            this.newCoin = false;
            this.scene.addCoin(this.parent, this.velocity);
        }

        //destory coin when it goes off screen
        if(this.x < -this.width)
        {
            this.destroy();
        }       
    } 
}