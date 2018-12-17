'use strict';

function Platform(position, game)
{
    var game = game;
    var x = position[0];
    var y = position[1];

    this.color;

    Phaser.Sprite.call(this, game, x, y, 'platform');

    this.anchor.setTo(0.5,0.5);
    this.scale.setTo(0.3, 0.3);
    this.speed = 1;

}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.constructor = Platform;

Platform.prototype.update  = function() //update
{
    if (this.alive)
    {
        this.y--;
        if (this.y < -50) {
            this.kill();
            console.log("He sido destruido" + this.y);
        }
    }
}

module.exports = Platform;