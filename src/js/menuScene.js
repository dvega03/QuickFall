'use strict';

var MenuScene = {
    preload: function () {
      this.game.load.spritesheet('ball','Assets/Sprites/Ball_Spritesheet.png',1000,1000);
      this.game.load.spritesheet('frame','Assets/Sprites/Frame.png',1000,1000);
      this.game.load.spritesheet('saw','Assets/Sprites/Saw.png',1000,1000);
    },
  
    create: function () {
      this.game.stage.backgroundColor = "#105987";
      this.createButton(this.game.world.width/3, this.game.world.centerY,'frame',this.actionOnClick,this,1,0,2);
      var ball = this.game.add.sprite(this.game.world.width/3,this.game.world.centerY,'ball');
      ball.scale.setTo(0.1);
      ball.anchor.setTo(0.5,0.5);
      this.createButton(this.game.world.width*(2/3), this.game.world.centerY,'frame',this.actionOnClick,this,1,0,2);
      var saw = this.game.add.sprite(this.game.world.width*(2/3),this.game.world.centerY,'saw');
      saw.scale.setTo(0.1);
      saw.anchor.setTo(0.5,0.5);
    },

    createButton: function(x,y,avatar,funct,instance,overfr,outfr,downfr){
      var avatarButton = this.game.add.button(x,y,avatar,funct,instance,overfr,outfr,downfr);
      avatarButton.scale.setTo(0.1);
      avatarButton.anchor.setTo(0.5,0.5);
     },
  
     actionOnClick: function(){
      console.log("Game Started");
      this.game.gameManager.loadState('play');
     }
  };
  
  module.exports = MenuScene;