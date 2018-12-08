'use strict';
var Points = require('./points.js');
var Player = require ('./player.js');
var Platform = require('./platform.js');
var RandomGenerator = require('./randomgenerator.js');


var p = new Points([20,20]);
var player = new Player('ball');
var rng;


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
  
    player.getSprite(); //Creates player sprite
    player.getPhysics(); //Allows the sprite to use Phaser's physics
    player.getAnimations();
    
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var plat = new Platform([400,300], this.game);
    this.game.world.addChild(plat);

    p.game = this.game;
    p.createText();
    p.resetPoints();

      rng = new RandomGenerator(this.game, 3, 6, 800, 600);
  },
    
  update:function(){

    //Setting player movement
    player.controls();
    p.update();
    p.updateText();
  },

  render:function(){

      this.game.debug.body(player.sprite);
      rng.render();
  }
}

module.exports = PlayScene;
