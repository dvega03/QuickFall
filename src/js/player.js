'use strict';

function Player(avatar){
    this.avatar = avatar;
    this.posX = 0;
    this.posY = 0;
    this.game = null;
    this.sprite = null;
    this.cursors = null;
}


Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.getSprite = function(){
    this.sprite = this.game.add.sprite(this.posX,this.posY,this.avatar);
    this.sprite.scale.setTo(0.1);
    this.sprite.anchor.setTo(0.5,0.5);
}

Player.prototype.getPhysics = function(){

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.set(1.0);
    this.sprite.body.gravity.set(0,1600);
    this.sprite.body.setSize(500,500,250,250);
}

Player.prototype.controls = function(){
    this.sprite.body.velocity.x = 0;
    if (this.cursors.left.isDown){ 
        this.sprite.body.velocity.x = -300; }
    if (this.cursors.right.isDown){ 
        this.sprite.body.velocity.x = +300; }
}

Player.prototype.getAnimations = function(){
    this.anim = this.sprite.animations.add('anim',[0,6,8,6,0],24,false);
}


module.exports = Player;
