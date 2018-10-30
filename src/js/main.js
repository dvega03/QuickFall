'use strict';

var PlayScene = require('./play_scene.js');
var MenuScene = require ('./menu_scene');


var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
    this.game.load.image('ball', 'Assets/Sprites/Ball_Spritesheet.png');
    this.game.load.image('platform', 'Assets/Sprites/Platform.png');
  },

  create: function () {
    this.game.state.start('menu');
  }
};


window.onload = function () {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  game.state.add('boot', BootScene);
  game.state.add('menu', MenuScene);
  game.state.add('play', PlayScene);

  game.state.start('boot');
};
