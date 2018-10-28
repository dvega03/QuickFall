'use strict';
var Points = require('./points.js');


  var PlayScene = {

    main: function()
    {
      var p = new Points([20,20], this.game),
    },

  create: function () {
    this.game.stage.backgroundColor = "#452036";
    p.createText();
  },

  update: function(){
    p.update();
    p.updateText();
  }

  

};

module.exports = PlayScene;
