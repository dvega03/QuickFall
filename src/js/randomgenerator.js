'use strict'
var Platform = require('./platform.js');
var Spike = require('./spike.js');


function RandomGenerator (game, columns, width, heigth)
{

    this._game = game;

    this._columns = columns;
    this.spawnPoints = [];

    this.lastPlatform = null;

    for(var i = 1; i <= 3; i++)
    {
        this.spawnPoints[i - 1] = {x: width/columns*i, y: heigth + 100};
    }

    var destroyPoint;//A que altura se destruyen las plataformas
    var instiantiatePoint;//A que altura se crean las plataformas
    var gap;

    var boolSpawn = false;

    this.platforms = game.add.group();

    return this;

}

RandomGenerator.prototype.spawnPlatform  = function()
{
    for(var i = 0; i < _game.rnd.integerInRange(0,3); i++)//# of platforms
    {
        var rnd = _game.rnd.integerInRange(1,3);
        var newPlatform = new Platform([this.spawnPoints[rnd].x, this.spawnPoints[rnd].y],_game);
        this.platforms.add(newPlatform);

        rnd = this._game.rnd.integerInRange(0,4);

        for(var j = 0; j < rnd; j++)
        {
            var newSpike = new Spike([newPlatform.spikePoints[rnd].x, newPlatform.spikePoints[rnd].y], _game);
            newPlatform.addChild(newSpike);
        }

        this.lastPlatform = newPlatform;
    }
    this.platforms.enableBody();
}

RandomGenerator.prototype.checkSpawn = function()
{

    if(this.lastPlatform.y <= gap + instiantiatePoint) boolSpawn = true;
    else boolSpawn = false;
}

RandomGenerator.prototype.update = function()
{
    
    this.spawnPlatform();
}

RandomGenerator.prototype.destroyPlatform = function()
{

}

module.exports = RandomGenerator;