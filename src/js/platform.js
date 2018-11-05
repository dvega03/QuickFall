'use strict';

function Platform(position)
{
    this.game = null;
    this.graphic = null;
    this.position = position;
    this.position.x = position[0];
    this.position.y = position[1];
    this.spriteHeigth = null;
    this.spriteWidth = null;
    this.spikePoints = new Array(6).fill(null);

    this.color;

}


Platform.prototype.createPlatform = function()
{
    
    this.graphic = this.game.add.sprite(this.position.x,  this.position.y,'platform');
   
    //this.game.physics.arcade.gravity.y = 100;
    //this.graphic.body.collideWorldBounds = true;

    this.graphic.anchor.x = 0.5;
    this.graphic.anchor.y = 0.5;

    this.graphic.scale.setTo(0.5,0.5);

    this.getH();
    console.log(this.spriteHeigth);
    this.getW();
    console.log(this.spriteWidth);

    this.game.physics.arcade.enable(this.graphic);

    this.setSpikePoints();

}


Platform.prototype.setSpikePoints = function()
{

    for(var i = 0; i < 6;i++)
    {
        this.spikePoints[i] = {x:0,y:0};
    }



    for(i = 0; i < 4; i++) // First 4 points
    {
        this.spikePoints[i].x = this.position.x - this.spriteWidth/2 + this.spriteWidth/5 * (i + 1);
        this.spikePoints[i].y = this.position.y - this.spriteHeigth/2;
    }

    //p5 & p6

    this.spikePoints[4].x = this.position.x - this.spriteWidth/2;
    this.spikePoints[4].y = this.position.y;

    this.spikePoints[5].x = this.position.x + this.spriteWidth/2;
    this.spikePoints[5].y = this.position.y;
}

Platform.prototype.getW = function() { this.spriteWidth = this.graphic.width; }

Platform.prototype.getH = function() { this.spriteHeigth = this.graphic.height; }

Platform.prototype.destroyPlatform  = function()
{

}

module.exports = Platform;