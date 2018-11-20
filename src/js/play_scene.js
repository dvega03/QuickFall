'use strict';
var Points = require('./points.js');
var Platform = require('./platform.js');


var p = new Points([20,20]);

  var PlayScene = {

  create: function () {

    this.game.stage.backgroundColor = "#452036";
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    var plat = new Platform([400,300], this.game);
    this.game.world.addChild(plat);




    p.game = this.game;
    p.createText();
    p.resetPoints();

  },

  update: function(){
    p.update();
    p.updateText();
  }

  

};

module.exports = PlayScene;
