'use strict';

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('BgLayer1','Assets/Background/Layer1.png');
    this.game.load.image('BgLayer2','Assets/Background/Layer2.png');
    this.game.load.image('logo','Assets/Logo.png');
  },

  create: function () {
    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.sprite.scale.setTo(0.5);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.alpha = 0;

    this.tween = this.game.add.tween(this.sprite).to( { alpha: 1 }, 5000, Phaser.Easing.Linear.None,true,1000,0,false);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.tween.onComplete.add(function(){this.game.gameManager.loadState('menu')},this);
  }
};

module.exports = BootScene;

