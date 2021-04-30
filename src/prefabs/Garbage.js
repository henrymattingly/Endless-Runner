class Garbage extends Phaser.Physics.Arcade.Sprite{
    constructor( scene, velocity) {
        super(scene, game.config.width + garbageWidth, Phaser.Math.Between(garbageHeight/2, game.config.height - garbageHeight/2), 'garbage');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.newTrash = true;
        //this.points = pointValue;
        //this.moveSpeed = game.settings.garbageSpeed;
    }

    update()
    {
        //spawn new trash when current one reaches middle of map
        if(this.newTrash && this.x < game.config.width/2)
        {
            this.newTrash = false;

            this.scene.addTrash(this.parent, this.velocity);
        }

        //destory trash when it goes off screen
        if(this.x < -this.width)
        {
            this.destroy();
        }
        
    }
}