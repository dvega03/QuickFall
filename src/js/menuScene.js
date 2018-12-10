'use strict';



var MenuScene = {
    preload: function () {
      this.game.load.spritesheet('ball','Assets/Sprites/Ball_Spritesheet.png',1000,1000);
      this.game.load.spritesheet('saw','Assets/Sprites/Saw.png',1000,1000);
      this.game.load.image('platform','Assets/Sprites/Platform.png');
    },
  
    create: function () {
      this.game.stage.backgroundColor = "#000080";
      this.bglayer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.bglayer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');

      this.game.gameManager.titleStart();

      //this.game.gameManager.newButton(75,75,'menuButton',this.playOnClick(),this,0,4000);
      this.game.gameManager.newButton(100,175,'menuButton',this.startOnClick,this,1,1750);
      this.game.gameManager.newButton(150,300,'menuButton',this.actionOnClick,this,2,2000);
      this.game.gameManager.newButton(200,425,'menuButton',this.actionOnClick,this,3,2250);
    },

    update:function(){
      this.bglayer1.tilePosition.x +=2;
      this.bglayer1.tilePosition.y -=2;

      this.bglayer2.tilePosition.x -=0.5;
      this.bglayer2.tilePosition.y +=0.5;
    },
    
    startOnClick: function(){
      this.game.world.removeAll();
      this.game.stage.backgroundColor = "#301060";
      this.bglayer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.bglayer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');
      this.game.gameManager.newButton(100,this.game.world.height*0.8,'menuButton',this.backOnClick,this,4,0);
      this.ballButton = this.game.gameManager.avatarButton(this.game.world.width*0.4,this.game.world.centerY,'ball',function(){this.playOnClick(0)},this,0,0);
      this.sawButton = this.game.gameManager.avatarButton(this.game.world.width*0.6,this.game.world.centerY,'saw',function(){this.playOnClick(1)},this,0,500);

    },

    playOnClick: function(avatar){
      console.log("GameStarted");
      this.game.gameManager.playerAvatar = avatar;
      this.game.gameManager.loadState('play');
    },

    actionOnClick: function(){
      this.game.world.removeAll();
      this.game.stage.backgroundColor = "#353535";
      this.bglayer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.bglayer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');
      this.game.gameManager.newButton(100,this.game.world.height*0.8,'menuButton',this.backOnClick,this,4,0);
     },

     backOnClick: function(){
      this.game.gameManager.loadState('menu');
     }
  };
  
  module.exports = MenuScene;