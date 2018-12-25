'use strict';
var Points = require('./points.js');
var Player = require ('./player.js');
var Platform = require('./platform.js');
var Boosters = require('./boosters.js');


var p = new Points([20,20]);
var player;
var plat;

 var PlayScene = {
  create: function () {
    this.game.stage.backgroundColor = "#800020";
    this.layer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
    this.layer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');
    //Points
    p.game = this.game;
    p.createText();
    p.resetPoints();
    //Setting Player properties
    player = new Player(this.game);
    player.setPlayer();
    player.create();
    plat = new Platform([this.game.world.centerX,700],this.game);
    this.game.world.addChild(plat);
    p.game = this.game;
    //p.createText();
    //p.resetPoints();

    this.boosters = new Boosters(this.game,player.player);

  },
    
  update:function(){
    //Setting player movement
    player.update();
    //p.update();
    //p.updateText();
    this.game.physics.arcade.collide(plat,player.player.sprite);
    this.game.physics.arcade.overlap(this.boosters.booster,player.player.sprite);
    this.layer1.tilePosition.x -=2;
    this.layer1.tilePosition.y +=2;
    
    this.layer2.tilePosition.x +=0.5;
    this.layer2.tilePosition.y -=0.5;


    //this.boosters.generator(this);

    if(this.game.input.keyboard.addKey(Phaser.Keyboard.ESC).isDown){this.game.gameManager.pauseMenu(this)}

  },

  render:function(){
    if(this.boosters.booster !== null)this.game.debug.body(this.boosters.booster);
    this.game.debug.body(plat);
  }
}

module.exports = PlayScene;
