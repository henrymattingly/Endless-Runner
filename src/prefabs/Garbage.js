class Garbage extends Phaser.GameObjects.Sprite{
    constructor( scene, x , y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.garbageSpeed;         // pixels per frame
    }

    update(){
        //moves garabge to the left
        this.x -= this.movespeed;
        
        //when garbage goes off screen reset it to the left
        if(this.x <=0 - this.width)
        {
            this.reset();
        }
    }

    reset()
    {
        this.x = game.config.width;
    }
}