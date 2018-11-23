'use strict'

function Spike(posiiton, game, playerSprite)
{
    var game = game;
    var x = posiiton[0];
    var y = posiiton[1];
    var _playerSprite;


    this.color;

    Phaser.Sprite.call(this, game, x, y,'spike');

}

Platform.prototype = Object.create(Phaser.Sprite.prototype);
Platform.constructor = Spike;

Spike.prototype.update = function()
{
}

Spike.prototype.collisionDetection = function()
{
    this.game.physics.arcade.collide(this, _playerSprite, this.collision, null, this.game);

}

Spike.prototype.collision = function()
{
    _playerSprite.destroy();
}


module.exports = Spike;

