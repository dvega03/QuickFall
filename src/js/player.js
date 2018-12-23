'use strict';

var Ball = require('./ball.js');
var Saw = require('./saw.js');


function Player (game){
    this.game = game;
    this.avatar = [Ball,Saw];
    this.player = null;
}

Player.prototype.setPlayer = function(){
    var found = false;
    var i = this.game.gameManager.playerAvatar;
    while(!found){
        if(i < this.avatar.length){
            this.player = this.game.gameManager.selectedAvatar(this.avatar[i]);
            found = true;
        }
        else{console.log("Invalid Class, nameClass not found"); found = true;}
    }
}

Player.prototype.create = function(){
    this.player.getSprite([this.game.world.centerX,-100]);
    this.player.getPhysics(this);
}

Player.prototype.update = function(){
    this.player.controls();
}

module.exports = Player;