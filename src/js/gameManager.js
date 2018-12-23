'use strict';

var BootScene = require('./bootScene.js');
var PlayScene = require('./playScene.js');
var MenuScene = require('./menuScene.js');

function GameManager(game){
    this.game = game;
    this.playerAvatar = null;
    this.flag = false;
}

GameManager.prototype.titleStart = function(){
    var tllayer1 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer1');
      tllayer1.scale.setTo(0.5);
      tllayer1.alpha = 0;
    var tllayer2 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer2');
      tllayer2.scale.setTo(0.5);
    var tllayer3 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer3');
      tllayer3.scale.setTo(0.5);
    var tllayer4 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer4');
      tllayer4.scale.setTo(0.5);
    var tllayer5 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer5');
      tllayer5.scale.setTo(0.5);
      tllayer5.alpha = 0;
    var tllayer6 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer6');
        tllayer6.scale.setTo(0.5);
    var tllayer7 = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'TlLayer7');
        tllayer7.scale.setTo(0.5);
      
    this.game.add.tween(tllayer1).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None,true,0,0,false);
    this.game.add.tween(tllayer2).from( { x: +850, y: -400 }, 1000, Phaser.Easing.Linear.None,true,0,0,false);
    this.game.add.tween(tllayer3).from( { x: -500 }, 1000, Phaser.Easing.Linear.None,true,0,0,false);
    this.game.add.tween(tllayer4).from( { x: 2000 }, 1500, Phaser.Easing.Linear.None,true,0,0,false);
    this.game.add.tween(tllayer5).to( { alpha: 1 }, 1500, Phaser.Easing.Linear.None,true,2500,0,false);
    this.game.add.tween(tllayer6).from( { y: -700 }, 1500, Phaser.Easing.Bounce.Out,true,1500,0,false);
    this.game.add.tween(tllayer7).from( { y: -700 }, 750, Phaser.Easing.Linear.None,true,2000,0,false);
}

GameManager.prototype.newButton = function(x,y,sprite,funct,instance,fr,delay){
    var button = this.game.add.button(x-1000,y,sprite,funct,instance,fr,fr,fr);
    button.inputEnable = false;
    button.scale.setTo(0.4);
    button.alpha = 0;
    var able = false;
    var tween = this.game.add.tween(button).to( { alpha: 1,x: x }, 1000, Phaser.Easing.Linear.None,true,delay,0,false);
    tween.onComplete.add(function(){able = true;},instance);
    var pointer = this.game.add.sprite(x-80,y+25,'pointer',0);
    pointer.visible = false;
    pointer.scale.setTo(0.2);
    pointer.animations.add('pointer');
    button.onInputOut.add(function(){if(able){pointer.visible = false;}},instance);
    button.onInputOver.add(function(){if(able){pointer.visible = true; pointer.animations.play('pointer',24);}}, instance);
   }

GameManager.prototype.avatarButton = function(x,y,sprite,funct,instance,fr,delay){
    var button = this.game.add.button(x,y,sprite,funct,instance,fr,fr,fr);
    button.inputEnable = false;
    button.anchor.setTo(0.5,0.5);
    button.scale.setTo(0.15);
    var able = false;
    var tween = this.game.add.tween(button).from( { y:-500 }, 1000, Phaser.Easing.Bounce.Out,true,delay,0,false);
    tween.onComplete.add(function(){able = true;},instance);
    var pointer = this.game.add.sprite(x,y,'avatarPointer',0);
    pointer.visible = false;
    pointer.anchor.setTo(0.5,0.5);
    pointer.scale.setTo(0.75);
    pointer.animations.add('avatarPointer');
    button.onInputOut.add(function(){if(able){pointer.visible = false;}},instance);
    button.onInputOver.add(function(){
        if(able){pointer.visible = true; pointer.animations.play('avatarPointer',16);this.game.add.tween(pointer).from( { angle:361 }, 10000, Phaser.Easing.Linear.None,true,0,-1);}
        }, instance);
}

GameManager.prototype.addState = function(nameState,state){
    for(var i = 0; i<nameState.length;i++){
        this.game.state.add(nameState[i],state[i]);
    }
}

GameManager.prototype.loadState = function(nameState){
    this.game.state.start(nameState);
}

GameManager.prototype.selectedAvatar = function(avatar){
    return new avatar(this.game);
}

GameManager.prototype.backOnClick = function(){
    this.game.gameManager.loadState('menu');
}

GameManager.prototype.pauseMenu = function(inst){
    this.flag = !this.flag;
    if(this.flag){
        this.pause = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'menuButton',5);
        this.pause.anchor.setTo(0.5,0.5);
        this.back = this.newButton(100,this.game.world.height*0.8,'menuButton',this.backOnClick,inst,4,0);
        }
    else{
        this.pause.destroy();
        this.back.destroy();
        }
}

window.onload = function () {
    var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
    game.gameManager = new GameManager(game);
    game.gameManager.addState(['boot','menu','play'],[BootScene,MenuScene,PlayScene]);
    game.gameManager.loadState('boot');
};
