'use strict';

var MenuScene = {
    preload: function () {
      this.game.load.spritesheet('ball','Assets/Sprites/Ball_Spritesheet.png',1000,1000);
      this.game.load.spritesheet('ballSmoke','Assets/Sprites/Ball_Smoke.png',100,100);
      this.game.load.spritesheet('frame','Assets/Sprites/Frame.png',1000,1000);
    },
  
    create: function () {
      this.game.stage.backgroundColor = "#105987";
      
      var buttonball = this.createButton(this.game.world.centerX, this.game.world.centerY,
        'frame',this.actionOnClick,this,1,0,2);
      var ball = this.game.add.sprite(this.game.world.centerX,this.game.world.centerY,'ball');
      ball.scale.setTo(0.1);
      ball.anchor.setTo(0.5,0.5);
    },

    createButton: function(x,y,avatar,funct,instance,overfr,outfr,downfr){
      var avatarButton = this.game.add.button(
        x,y,avatar,funct,instance,overfr,outfr,downfr);
      avatarButton.scale.setTo(0.1);
      avatarButton.anchor.setTo(0.5,0.5);
     },
  
     actionOnClick: function(){
      console.log("Game Started");
      this.game.state.start('play');
     }
  };
  
  module.exports = MenuScene;