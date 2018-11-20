'use strict';
var Player = require ('./player.js');

var player = new Player('ball');

 var PlayScene = {
  create: function () {
    //Creating animation of player
    this.game.stage.backgroundColor = "#263547";
    //Setting Player properties
    player.game = this.game;
    player.posX = this.game.world.centerX;
    player.posY = this.game.world.centerY; 
    player.cursors = this.game.input.keyboard.createCursorKeys();
  
    player.getSprite(); //Creates player sprite
    player.getPhysics(); //Allows the sprite to use Phaser's physics
  },
    
  update:function(){

    //Setting player movement
    player.controls();
  },

  render:function(){

    this.game.debug.body(player.sprite);
    this.game.debug.body(plane);
  },
};

module.exports = PlayScene;
