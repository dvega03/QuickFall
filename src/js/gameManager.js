'use strict';

var BootScene = require('./bootScene.js');
var PlayScene = require('./playScene.js');
var MenuScene = require('./menuScene.js');
var Player = require('./player.js');

function GameManager(game){
    this.game = game;
}

GameManager.prototype.addState = function(nameState,state){
    for(var i = 0; i<nameState.length;i++){
        this.game.state.add(nameState[i],state[i]);
    }
}

GameManager.prototype.loadState = function(nameState){
    this.game.state.start(nameState);
}

GameManager.prototype.selectedAvatar = function(){
    var playerAvatar;
}

window.onload = function () {
    var game = new Phaser.Game(1280, 720, Phaser.AUTO, 'game');
    game.gameManager = new GameManager(game);
    game.gameManager.addState(['boot','menu','play'],[BootScene,MenuScene,PlayScene]);
    game.gameManager.loadState('boot');
};
