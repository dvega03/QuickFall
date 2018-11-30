'use strict'
var Platform = require('./platform.js');
var Spike = require('./spike.js');
var Pool = require('./pool.js');

var poolPlat;
var poolSpike;

function RandomGenerator (game, columns, width, heigth)
{

    this._game = game;

    this._columns = columns;
    this.spawnPoints = new Array(this._columns).fill(null);

    this.lastPlatform = null;

    for(var i = 1; i <= 3; i++)
    {
        this.spawnPoints[i - 1] = {x: width/columns*i, y: heigth + 100};
    }

    var destroyPoint;//A que altura se destruyen las plataformas
    var instiantiatePoint;//A que altura se crean las plataformas
    var gap;

    var boolSpawn = false;

    var platformArr = [];
    var spikesArr = [];

    for (var i = 0; i < 100; i++)
    {
        platformArr.push(new Platform([0,0], game));
        spikesArr.push(new Spike([0,0], game));
    }

    poolPlat = new Pool(game, platformArr);
    poolSpike = new Pool(game, spikesArr);


}

RandomGenerator.prototype.spawnPlatform  = function()
{
    var newPlatform;

    for(var i = 0; i < this._game.rnd.integerInRange(0,3); i++)//# of platforms
    {
        var rnd = this._game.rnd.integerInRange(1, 3);

        newPlatform = poolPlat.spawn(this.spawnPoints[rnd].x, this.spawnPoints[rnd].y);
        //newPlatform = poolPlat.spawn(rnd *100, rnd * 100);
        console.log("Se ha instanciado con x :" + rnd*100 + "y la y :" + rnd*100);

        rnd = this._game.rnd.integerInRange(0,4);

        for(var j = 0; j < rnd; j++)
        {
           //poolSpike.spawn(newPlatform.spikePoints[rnd].x, newPlatform.spikePoints[rnd].y);
            poolSpike.spawn(rnd, rnd);
        }

        this.lastPlatform = newPlatform;
    }


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