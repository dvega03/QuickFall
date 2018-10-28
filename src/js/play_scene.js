'use strict';
var Points = require('./points.js');


var p = new Points([20,20]);

  var PlayScene = {

  create: function () {
    this.game.stage.backgroundColor = "#452036";
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
