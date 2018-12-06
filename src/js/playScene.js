'use strict';
var Points = require('./points.js');
var Player = require ('./player.js');
var Platform = require('./platform.js');


var p = new Points([20,20]);
var player;
var plat;

 var PlayScene = {
  create: function () {
    this.game.stage.backgroundColor = "#100030";
    this.layer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
    this.layer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');
    //Points
    p.game = this.game;
    p.createText();
    p.resetPoints();
    //Setting Player properties
    player = new Player(this.game);
    player.create();
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    plat = new Platform([this.game.world.centerX,this.game.world.height*(3/4)], this.game);
    this.game.world.addChild(plat);

    p.game = this.game;
    p.createText();
    p.resetPoints();

  },
    
  update:function(){
    //Setting player movement
    player.update();
    p.update();
    p.updateText();
    this.game.physics.arcade.collide(player.player.sprite,plat);
    this.layer1.tilePosition.x -=2;
    this.layer1.tilePosition.y +=2;
    
    this.layer2.tilePosition.x +=0.5;
    this.layer2.tilePosition.y -=0.5;
  },

  render:function(){
    this.game.debug.body(player.player.sprite);
    this.game.debug.body(plat);
  }
}

module.exports = PlayScene;
