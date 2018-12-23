'use strict';

var MenuScene = {
    create: function () {
      this.game.stage.backgroundColor = "#000075";
      this.bglayer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.bglayer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');

      this.lastSpawnTime = this.game.time.time;
      this.timeTilSpawn = this.game.rnd.integerInRange(3000,5000);

      this.game.gameManager.titleStart();

      if(this.game.gameManager.playerAvatar !== null)this.game.gameManager.newButton(75,75,'menuButton',function(){this.playOnClick(this.game.gameManager.playerAvatar)},this,0,3000);
      this.game.gameManager.newButton(100,175,'menuButton',this.startOnClick,this,1,1750);
      this.game.gameManager.newButton(150,300,'menuButton',this.actionOnClick,this,2,2000);
      this.game.gameManager.newButton(200,425,'menuButton',this.actionOnClick,this,3,2250);
    },

    update:function(){
      this.randomFall(['ball','saw']);

      this.bglayer1.tilePosition.x +=2;
      this.bglayer1.tilePosition.y -=2;

      this.bglayer2.tilePosition.x -=0.5;
      this.bglayer2.tilePosition.y +=0.5;
    },
    
    startOnClick: function(){
      this.game.world.removeAll();
      this.game.stage.backgroundColor = "#300060";
      this.bglayer1 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer1');
      this.bglayer2 = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'BgLayer2');
      this.game.gameManager.newButton(100,this.game.world.height*0.8,'menuButton',this.game.gameManager.backOnClick,this,4,0);
      this.ballButton = this.game.gameManager.avatarButton(this.game.world.width*0.4,this.game.world.centerY,'ball',function(){this.playOnClick(0)},this,0,0);
      this.sawButton = this.game.gameManager.avatarButton(this.game.world.width*0.6,this.game.world.centerY,'saw',function(){this.playOnClick(1)},this,0,750);

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
      this.game.gameManager.newButton(100,this.game.world.height*0.8,'menuButton',this.game.gameManager.backOnClick,this,4,0);
    },

    randomFall: function(images){
      var currentTime = this.game.time.time;
      var sprites = images;
      if(currentTime - this.lastSpawnTime > this.timeTilSpawn){
        this.timeTilSpawn = this.game.rnd.integerInRange(1000,3000);
        this.lastSpawnTime = currentTime;
        var avatar = this.game.add.sprite(this.game.rnd.integerInRange(0,this.game.world.width),-50,this.game.rnd.pick(sprites));
        avatar.anchor.setTo(0.5,0.5);
        avatar.scale.setTo(0.07);
        avatar.alpha = 0.75;
        var tween = this.game.add.tween(avatar).to( { y: +800 }, 1000, Phaser.Easing.Linear.None,true,0,0,false);
        tween.onComplete.add(function(){avatar.destroy();},this);
      }
    }
  };
  
  module.exports = MenuScene;