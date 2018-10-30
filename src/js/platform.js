'use strict';
function Platform(platform)
{
    this.game = null;
    this.graphic = null;
    this.position = platform;
    
    
    this.color;

}


Platform.prototype.createPlatform = function()
{
    
    this.graphic = this.game.add.sprite(400, 300, 'platform');
    this.game.physics.arcade.enable(this.graphic);
    this.game.physics.arcade.gravity.y = 100;
    this.graphic.body.collideWorldBounds = true;
    this.graphic.anchor.x = 0.5;
    this.graphic.anchor.y = 0.5;
    this.graphic.scale.setTo(0.5,0.5);

}

module.exports = Platform;