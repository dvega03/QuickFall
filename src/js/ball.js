'use strict';

function Ball(avatar){
    this.avatar = avatar;
}

Ball.prototype.ballSprite = function(game, posX, posY){
    game.add.sprite(posX,posY,this.avatar);
}

Ball.prototype.ballPhysics = function(game,sprite){
    game.physics.enable(sprite, Phaser.Physics.ARCADE);
    sprite.body.collideWorldBounds = true;
    sprite.body.bounce.set(1.0);
    sprite.body.gravity.set(0,1600);
}

module.exports = Ball;