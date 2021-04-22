class Bag extends Phaser.GameObjects.Sprite {
    constructor (scene, x, y, texture, frame){
        super (scene, x, y, texture, frame);

        scene.add.extisting(this);
        this.moveSpeed = 4;
    }
    
    update()
    {
        if(keyLEFT.isDown && this.x >= borderUISize + this.width) 
        {
            this.x -= this.moveSpeed;
        }
        if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) 
        {
            this.x += this.moveSpeed;
        }
        /*
        if (keyUP.isDown && this.y <= game.config.height - borderUISize - this.height) 
        {
            this.y += this.moveSpeed;
        }
        if (keyDOWN.isDown && this.y >= game.config.height - borderUISize - this.height) 
        {
            this.y -= this.moveSpeed;
        }*/
    }

}