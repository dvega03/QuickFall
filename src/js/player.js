'use strict';

function Player(avatar){
    this.avatar = avatar;
    this.posX = 0;
    this.posY = 0;
    this.game = null;
    this.sprite = null;
    this.cursors = null;
    this.partName = null;
}


Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;


Player.prototype.getSprite = function(){
    this.sprite = this.game.add.sprite(this.posX,this.posY,this.avatar);
    this.sprite.scale.setTo(0.1);
    this.sprite.anchor.setTo(0.5,0.5);
}

Player.prototype.getPhysics = function(inst){

    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.set(1.0);
    this.sprite.body.gravity.set(0,1600);
    this.sprite.body.setSize(500,500,250,250);
    this.sprite.body.onCollide = new Phaser.Signal();
    this.sprite.body.onCollide.add(this.collision,inst);
    this.sprite.body.onWorldBounds = new Phaser.Signal();
    this.sprite.body.onWorldBounds.add(this.collision,inst);
}

Player.prototype.controls = function(){
    this.sprite.body.velocity.x = 0;
    if (this.cursors.left.isDown){ 
        this.sprite.body.velocity.x = -300; }
    if (this.cursors.right.isDown){ 
        this.sprite.body.velocity.x = +300; }
}

Player.prototype.particles = function(){
    this.part = this.game.add.sprite(this.posX,this.posY,this.partName,30);
    this.part.anchor.setTo(0.5,0.5);
    //this.anim = this.part.animations.add('bounce',[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]); //[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]
    //this.anim.play(30,false);
}

Player.prototype.collision = function(sprite){
    if(sprite.body.touching.down||sprite.body.blocked.down){sprite.body.velocity.y = -800;}
    
    //this.particles;
}


module.exports = Player;
