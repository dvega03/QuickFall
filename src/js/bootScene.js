'use strict';

var BootScene = {
  preload: function () {
    // load here assets required for the loading screen
  },

  create: function () {
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.gameManager.loadState('menu');
  }
};

module.exports = BootScene;

