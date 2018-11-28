'use strict';

function Platform(position, game)
{
    var game = game;
    var x = position[0];
    var y = position[1];
    this.spikePoints = new Array(6).fill(null);

    this.color;

    Phaser.Sprite.call(this, game, x, y, 'platform');

    this.anchor.setTo(0.5,0.5);
    this.scale.setTo(0.5, 0.5);

}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.constructor = Platform;

Platform.prototype.setSpikePoints = function()
{

    for(var i = 0; i < 6;i++)
    {
        this.spikePoints[i] = {x:0,y:0};
    }



    for(i = 0; i < 4; i++) // First 4 points
    {
        this.spikePoints[i].x = this.x - this.width /2 + this.width /5 * (i + 1);
        this.spikePoints[i].y = this.y - this.height /2;
    }

    //p5 & p6

    this.spikePoints[4].x = this.x - this.width /2;
    this.spikePoints[4].y = this.y;

    this.spikePoints[5].x = this.x + this.width /2;
    this.spikePoints[5].y = this.y;
}

Platform.prototype.update  = function() //update
{ 
    
}




module.exports = Platform;