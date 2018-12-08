'use strict';

function Platform(position, game)
{
    var game = game;
    var x = position[0];
    var y = position[1];

    this.color;

    Phaser.Sprite.call(this, game, x, y, 'platform');

    this.anchor.setTo(0.5,0.5);
    this.scale.setTo(0.5, 0.5);
    this.speed = 1;

}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.constructor = Platform;


Platform.prototype.update  = function() //update
{
    this.y = this.y * this.speed;
}




module.exports = Platform;