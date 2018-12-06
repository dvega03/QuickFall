'use strict';

function Ball(game){
    this.game = game;
    //this.keys = this.game.gameManager.createKeys();
    this.sprite = null;
}

Ball.prototype = Object.create(Phaser.Sprite.prototype);
Ball.constructor = Ball;

Ball.prototype.getSprite = function(pos){
    //Phaser.Sprite.call(this,this.game,pos[0],pos[1],this.avatar);
    this.sprite = this.game.add.sprite(pos[0],pos[1],'ball');
    this.sprite.scale.setTo(0.1);
    this.sprite.anchor.setTo(0.5,0.5);
}

Ball.prototype.getPhysics = function(inst){
    this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.gravity.set(0,1600);
    this.sprite.body.setSize(500,500,250,250);
    this.sprite.body.onCollide = new Phaser.Signal();
    this.sprite.body.onCollide.add(this.collision,inst);
}

Ball.prototype.controls = function(){
    this.sprite.body.velocity.x = 0;
    if (this.game.input.keyboard.addKey(Phaser.Keyboard.A).isDown){ 
        this.sprite.body.velocity.x = -300; }
    if (this.game.input.keyboard.addKey(Phaser.Keyboard.D).isDown){ 
        this.sprite.body.velocity.x = +300; }
}

/*Ball.prototype.particles = function(){
    this.part = this.game.add.sprite(this.posX,this.posY,this.partName,30);
    this.part.anchor.setTo(0.5,0.5);
    //this.anim = this.part.animations.add('bounce',[28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57]);
    //this.anim.play(30,false);
}*/

Ball.prototype.collision = function(sprite){
    if(sprite.body.touching.down){sprite.body.velocity.y = -900;}
}


module.exports = Ball;
