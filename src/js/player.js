'use strict';

var Ball = require('./ball.js');
var Saw = require('./saw.js');


function Player (game){
    this.game = game;
    this.player = new Saw(this.game);
}

Player.prototype.create = function(){
    this.player.getSprite([this.game.world.centerX,this.game.world.centerY]);
    this.player.getPhysics(this);
}

Player.prototype.update = function(){
    this.player.controls();
}

module.exports = Player;