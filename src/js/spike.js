'use strict'

function Spike(positon, game)
{
    var game = game;
    var x = positon[0];
    var y = positon[1];
    


    this.color;

    Phaser.Sprite.call(this, game, x, y,'spike');

}

Spike.prototype = Object.create(Phaser.Sprite.prototype);
Spike.constructor = Spike;

Spike.prototype.update = function()
{
}

Spike.prototype.collisionDetection = function()
{
   //this.game.physics.arcade.collide(this, _playerSprite, this.collision, null, this.game);

}

Spike.prototype.collision = function()
{
    _playerSprite.destroy();
}


module.exports = Spike;

