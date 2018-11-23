'use strict'
var Platform = require('./platform.js');
var Spike = require('./spike.js');

function RandomGenerator(platformID,game, columns, player)
{
    this._platformID = platform;
    this._game = game;

    this._columns = columns;
    this.spawnPoints = []

    this.lastPlatform = null;

    for(var i = 1; i <= 3; i++)
    {
        spawnPoints[i - 1] = {x:game.world.width/columns*i, y: game.world.height + 100};
    }

    var destroyPoint;//A que altura se destruyen las plataformas
    var instiantiatePoint;//A que altura se crean las plataformas
    var gap;

    var boolSpawn = false;

    this.platforms = _game.add.group();
}

RandomGenerator.prototype.spawnPlatform  = function()
{
    for(var i = 0; i < this._game.rnd.integerInRange(0,3); i++)//# of platforms
    {
        var rnd = this._game.rnd.integerInRange(1,3);
        var newPlatform = new Platform([this.spawnPoints[rnd].x, this.spawnPoints[rnd].y],this._game);
        this.platforms.add(newPlatform);

        rnd = this._game.rnd.integerInRange(0,4);

        for(var j = 0; j < rnd; j++)
        {
            var newSpike = new Spike([newPlatform.spikePoints[rnd].x, newPlatform.spikePoints[rnd].y], this._game, player);
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
    this.checkSpawn();
    if(boolSpawn)
    {
        this.spawnPlatform();
    }
}

RandomGenerator.prototype.destroyPlatform = function()
{

}