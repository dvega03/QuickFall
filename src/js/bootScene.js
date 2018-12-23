'use strict';

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('BgLayer1','Assets/Background/Layer1.png');
    this.game.load.image('BgLayer2','Assets/Background/Layer2.png');
    this.game.load.image('Logo','Assets/Logo.png');
    this.game.load.image('TlLayer1','Assets/Title/Layer1.png');
    this.game.load.image('TlLayer2','Assets/Title/Layer2.png');
    this.game.load.image('TlLayer3','Assets/Title/Layer3.png');
    this.game.load.image('TlLayer4','Assets/Title/Layer4.png');
    this.game.load.image('TlLayer5','Assets/Title/Layer5.png');
    this.game.load.image('TlLayer6','Assets/Title/Layer6.png');
    this.game.load.image('TlLayer7','Assets/Title/Layer7.png');
    this.game.load.spritesheet('ball','Assets/Sprites/Ball_Spritesheet.png',1000,1000);
    this.game.load.spritesheet('saw','Assets/Sprites/Saw.png',1000,1000);
    this.game.load.spritesheet('ballSmoke','Assets/Sprites/Ball_Smoke.png',100,100);
    this.game.load.spritesheet('sawSmoke','Assets/Sprites/Saw_Smoke.png',100,100);
    this.game.load.image('platform','Assets/Sprites/Platform.png');
    this.game.load.spritesheet('menuButton','Assets/Title/MenuButtons.png',512,288);
    this.game.load.spritesheet('pointer','Assets/Sprites/Pointer.png',512,288);
    this.game.load.spritesheet('avatarPointer','Assets/Sprites/AvatarPointer.png',300,300);
    this.game.load.spritesheet('boosters','Assets/Sprites/Boosters.png',300,300);
    this.game.load.spritesheet('meteor','Assets/Sprites/Meteor.png',100,100);
  },

  create: function () {
    this.sprite = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'Logo');
    this.sprite.scale.setTo(0.5);
    this.sprite.anchor.setTo(0.5, 0.5);
    this.sprite.alpha = 0;

    this.tween = this.game.add.tween(this.sprite).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None,true,0,0);
    this.tween.yoyo(true,2000);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.tween.onComplete.add(function(){this.game.gameManager.loadState('menu')},this);
  }
};

module.exports = BootScene;

