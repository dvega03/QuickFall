'use strict';
var Points = require('./points.js');
var Player = require ('./ball.js');
var Platform = require('./platform.js');


var p = new Points([20,20]);
var player = new Player('ball');
var plat;

 var PlayScene = {
  create: function () {
    this.game.stage.backgroundColor = "#263547";
    //Points
    p.game = this.game;
    p.createText();
    p.resetPoints();
    //Setting Player properties
    player.game = this.game;
    player.posX = this.game.world.centerX;
    player.posY = this.game.world.centerY; 
    player.cursors = this.game.input.keyboard.createCursorKeys();
    player.partName = 'ballSmoke';
  
    player.getSprite(); //Creates player sprite
    player.getPhysics(this); //Allows the sprite to use Phaser's physics
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    plat = new Platform([this.game.world.centerX,this.game.world.height*(3/4)], this.game);
    this.game.world.addChild(plat);

    p.game = this.game;
    p.createText();
    p.resetPoints();

  },
    
  update:function(){
    //Setting player movement
    player.controls();
    p.update();
    p.updateText();
    this.game.physics.arcade.collide(player.sprite,plat,player.collision);
  },

  render:function(){
    this.game.debug.body(player.sprite);
    this.game.debug.body(plat);
  }
}

module.exports = PlayScene;
