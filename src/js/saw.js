'use strict';

function Saw(game){
    this.game = game;
    this.sprite = null;
    this.power = false;
}
Saw.prototype = Object.create(Phaser.Sprite.prototype);
Saw.constructor = Saw;

Saw.prototype.getSprite = function(pos){
    this.sprite = this.game.add.sprite(pos[0],pos[1],'saw');
    //Phaser.Sprite.call(this,this.game,pos[0],pos[1],'saw');
    this.sprite.scale.setTo(0.1);
    this.sprite.anchor.setTo(0.5,0.5);
}

Saw.prototype.getPhysics = function(inst){
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.gravity.set(0,1600);
    this.sprite.body.setSize(500,500,250,250);
    this.sprite.body.onCollide = new Phaser.Signal();
    this.sprite.body.onCollide.add(this.collision,inst);
    //this.sprite.body.onCollide.add(this.particles,inst);
}

Saw.prototype.controls = function(){
    this.sprite.body.velocity.x = 0;
    if (!this.power && this.game.input.keyboard.addKey(Phaser.Keyboard.A).isDown){ 
        this.sprite.body.velocity.x = -300; }
    if (!this.power && this.game.input.keyboard.addKey(Phaser.Keyboard.D).isDown){ 
        this.sprite.body.velocity.x = +300; }
}

Saw.prototype.particles= function(sprite){
    var part = this.game.add.sprite(sprite.x,sprite.y,'sawSmoke');
    part.anchor.setTo(0.7,0.5);
    part.scale.setTo(1);
    part.visible = false;
    this.anim = part.animations.add('drag');
    this.anim.play('drag',16,true);
    if(sprite.body.velocity.x !== 0){
        part.visible = true;
        if(sprite.body.velocity.x<0){part.scale.x *= -1;}
    }
}

Saw.prototype.collision = function(sprite){
    sprite.body.angularVelocity=0;
    if(sprite.body.velocity.x > 0){sprite.body.angularVelocity=+200;}
    else if(sprite.body.velocity.x < 0){sprite.body.angularVelocity=-200;}

    if(this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR).isDown){
        this.power = true;
    }
    else {this.power = false;}
}

module.exports = Saw;