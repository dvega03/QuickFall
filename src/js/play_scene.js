'use strict';
  var ball;
  var fall;
  var bounce;
  var cursors

  var PlayScene = {
  create: function () {
      //Creating animation of player
      this.game.stage.backgroundColor = "#263547";
      ball = this.game.add.sprite(this.game.world.centerX,
        this.game.world.centerY,'ball');
      ball.scale.set(0.1);
      ball.anchor.setTo(0.5,0.5);
      fall = ball.animations.add('fall',[0]);
      bounce = ball.animations.add('bounce',[0]);
    
      //Enable Phaser physics
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.enable(ball, Phaser.Physics.ARCADE);
      ball.body.collideWorldBounds = true;
    
      //Set controls by keybord
      cursors = this.game.input.keyboard.createCursorKeys();
    
      //Bounce&Gravity
      ball.body.bounce.set(1);
      ball.body.gravity.set(0,1600);
    },
    
 update:function(){

  //this.ballAnimation();

  //Setting player movement
  ball.body.velocity.x = 0;

  if (cursors.left.isDown){
      ball.body.velocity.x = -300;
  }

  if (cursors.right.isDown){
      ball.body.velocity.x = +300;
  }

  if (cursors.up.isDown){
      ball.body.velocity.y = -500;
  }

},

ballAnimation:function(){
  if(ball.body.velocity.y > 0){
  fall.play(8);
  }

  if(ball.body.velocity.y < 0){
  bounce.play(8);
  }
}
};

module.exports = PlayScene;
