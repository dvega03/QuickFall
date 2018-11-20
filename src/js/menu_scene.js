'use strict';

var MenuScene = {
    preload: function () {
      this.game.load.spritesheet('ball', 'Assets/Sprites/Ball_Spritesheet.png',1000,1000);
    },
  
    create: function () {
      this.game.stage.backgroundColor = "#105987";
      
      var buttonball = this.createButton(this.game.world.centerX, this.game.world.centerY,
        'ball',this.actionOnClick,this,4,0,11);
    },
    
    createButton: function(x,y,avatar,funct,instance,overfr,outfr,downfr){
      var avatarButton = this.game.add.button(
        x,y,avatar,funct,instance,overfr,outfr,downfr);
      avatarButton.scale.setTo(0.1);
      avatarButton.anchor.setTo(0.5,0.5);
     },
  
     actionOnClick: function(){
      console.log("Por fin Coño de la madre");
      this.game.state.start('play');
     }
  };
  
  module.exports = MenuScene;