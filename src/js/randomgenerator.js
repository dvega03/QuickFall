'use strict'
var Platform = require('./platform.js');
var Spike = require('./spike.js');
var Pool = require('./pool.js');

var poolPlat;
var poolSpike;

function RandomGenerator (game, columns, numberSpikes, width, heigth)
{

    var Point = function point(x,y)
    {
        this._x = x;
        this._y = y;

        return this;
    }

    this._game = game;

    this._columns = columns;
    this._numberSpikes = numberSpikes;
    this._spawnPoints = new Array(this._columns).fill(new Point(0, 0));
    console.log(this._spawnPoints[0]._x);


    this.lastPlatform = null;

    for (var i = 0; i < this._columns; i++)
    {
        console.log(i);
        this._spawnPoints[i]._x = width / ((this._columns + 1) * (i + 1));
        this._spawnPoints[i]._y = heigth + 100;
        
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

    this._timer = this._game.time.create(false);

    this.start();

}

RandomGenerator.prototype.start = function ()
{
    this._timer.loop(1000, this.spawnPlatform, this._game);
    this._timer.start();
}


RandomGenerator.prototype.spawnPlatform  = function()
{
    var rnd;
    var newPlatform;
    var maxSpikes;
    var maxPlat;

    maxPlat = game.rnd.integerInRange(0, 3); //Option 1
    //maxPlat = this._game.rnd.integerInRange(0, 3); //Option 2

    for (var i = 0; i < maxPlat; i++)//# of platforms
    {
        rnd = game.rnd.integerInRange(0, this._columns - 1); //Option 1
        //rnd = this._game.rnd.integerInRange(0, this._columns - 1); //Option 2

        newPlatform = poolPlat.spawn(this._spawnPoints[rnd]._x, this._spawnPoints[rnd]._y);
        //newPlatform = poolPlat.spawn(rnd *100, rnd * 100);
        console.log("Se ha instanciado con x :" + this._spawnPoints[rnd]._x + "y la y :" + this._spawnPoints[rnd]._y);

        maxSpikes = game.rnd.integerInRange(0, 4); //Option 1
        //maxSpikes = this._game.rnd.integerInRange(0, 4); //Option 2

        for (var j = 0; j < maxSpikes; j++)
        {
            var spikePos;

            rnd = game.rnd.integerInRange(0, 5); //Option 1
            //rnd = this._game.rnd.integerInRange(0, 5);//Option 2

            spikePos = this.setSpikeSpawn(newPlatform, this._game.rnd.integerInRange(0, this._numberSpikes - 1));
            poolSpike.spawn(spikePos.x, spikePos.y);
        }

        this.lastPlatform = newPlatform;
    }


}

RandomGenerator.prototype.checkSpawn = function()
{
    if(this.lastPlatform.y <= gap + instiantiatePoint) boolSpawn = true;
    else boolSpawn = false;
}

RandomGenerator.prototype.setSpikeSpawn = function (platform,position)
{

    var x, y;

    switch (position)
    {
        case 0:
        case 1:
        case 2:
        case 3:
            x = platform.x - (platform.width / 2) + (platform.width / (this._numberSpikes - 1)) * (position + 1);
            y = platform.y - platform.heigth / 2;
            break;
        case 5:
            x = platform.x - platform.width / 2;
            y = platform.y;
            break;
        case 6:
            x = platform.x + platform.width / 2;
            y = platform.y;
            break;
    }


    return [x, y];
}

RandomGenerator.prototype.render = function ()
{
    this._game.debug.text('Time until event: ' + this._timer.duration.toFixed(0), 32, 32);
}

RandomGenerator.prototype.destroyPlatform = function()
{

}

module.exports = RandomGenerator;