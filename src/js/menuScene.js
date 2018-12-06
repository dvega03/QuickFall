'use strict';



var MenuScene = {
    preload: function () {
      this.game.load.spritesheet('ball','Assets/Sprites/Ball_Spritesheet.png',1000,1000);
      this.game.load.spritesheet('frame','Assets/Sprites/Frame.png',1000,1000);
      this.game.load.spritesheet('saw','Assets/Sprites/Saw.png',1000,1000);
      this.game.load.image('platform','Assets/Sprites/Platform.png');
    },
  
    create: function () {
      this.game.stage.backgroundColor = "#301060";
      this.layer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.layer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');

      this.createButton(this.game.world.width/3, this.game.world.centerY,'frame',function(){this.playOnClick('Ball')},this,1,0,2);
      this.ball = this.game.add.sprite(this.game.world.width/3,this.game.world.centerY,'ball');
      this.ball.scale.setTo(0.1);
      this.ball.anchor.setTo(0.5,0.5);
      this.createButton(this.game.world.width*(2/3), this.game.world.centerY,'frame',function(){this.playOnClick('Saw')},this,1,0,2);
      this.saw = this.game.add.sprite(this.game.world.width*(2/3),this.game.world.centerY,'saw');
      this.saw.scale.setTo(0.1);
      this.saw.anchor.setTo(0.5,0.5);
    },

    update:function(){
      this.layer1.tilePosition.x +=2;
      this.layer1.tilePosition.y -=2;

      this.layer2.tilePosition.x -=0.5;
      this.layer2.tilePosition.y +=0.5;

    },

    createButton: function(x,y,avatar,funct,instance,overfr,outfr,downfr){
      var avatarButton = this.game.add.button(x,y,avatar,funct,instance,overfr,outfr,downfr);
      avatarButton.scale.setTo(0.1);
      avatarButton.anchor.setTo(0.5,0.5);
     },
  
     playOnClick: function(avatar){
      console.log("Game Started");
      this.game.gameManager.selectedAvatar(avatar);
      this.game.gameManager.loadState('play');
     }
  };
  
  module.exports = MenuScene;