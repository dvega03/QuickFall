'use strict';

function Boosters(game,player){
    this.game = game;
    this.player = player;
    this.booster = null;
    this.lastSpawnTime = this.game.time.time;
    this.timeTilSpawn = this.game.rnd.integerInRange(3000,5000);
}

Boosters.prototype = Object.create(Phaser.Sprite.prototype);
Boosters.constructor = Boosters;

Boosters.prototype.generator = function(inst){
    var currentTime = this.game.time.time;
      if(currentTime - this.lastSpawnTime > this.timeTilSpawn){
        this.timeTilSpawn = this.game.rnd.integerInRange(2000,5000);
        this.lastSpawnTime = currentTime;
        this.booster = this.game.add.sprite(this.game.rnd.integerInRange(400,800),this.game.rnd.integerInRange(300,500),'boosters');
        this.booster.frame = 1;
        this.booster.scale.setTo(0.4);
        this.game.physics.enable(this.booster, Phaser.Physics.ARCADE);
        this.booster.body.onOverlap = new Phaser.Signal();
        this.booster.body.onOverlap.add(this.meteor,inst);
        this.game.time.events.add(Phaser.Timer.SECOND * 2, function(){this.booster.destroy();}, this)
    }
}

Boosters.prototype.doublePoints = function(){

}

Boosters.prototype.freeze = function(){

}

Boosters.prototype.meteor = function(booster){
    booster.destroy();
    var meteor = this.game.add.sprite(this.player.sprite.x,this.player.sprite.x,'meteor');
    meteor.scale.setTo(3);
    meteor.anchor.setTo(0.5,0.5);
    meteor.alpha = 0.75;
    meteor.animations.add('anim');
    meteor.animations.play('anim',60,true);
}

Boosters.prototype.shield = function(){

}

module.exports = Boosters;