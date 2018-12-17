'use strict'
var Platform = require('./platform.js');
var Spike = require('./spike.js');
var Pool = require('./pool.js');

var poolPlat;
var poolSpike;
var self;

function RandomGenerator (game, columns, numberSpikes, width, heigth)
{
    self = this;

    var Point = function point(x,y)
    {
        this._x = x;
        this._y = y;

        return this;
    }

    this._game = null;
    this._game = game;

    this._timePerDelay = 5000;
    this._columns = null;
    this._columns = columns;
    this._numberSpikes = numberSpikes;
    this._spawnPoints = [];

    for (var i = 0; i < columns; i++)
    {
        this._spawnPoints.push({ x: 0, y: 0 });
    }

    console.log(this._spawnPoints);

    this.lastPlatform = null;

    for (var i = 0; i < this._columns; i++)
    {
        this._spawnPoints[i].x = (width / (columns + 1)) * (i + 1);
        this._spawnPoints[i].y = heigth + 100;
    }
  
    var destroyPoint;//A que altura se destruyen las plataformas
    this.instiantiatePoint = heigth + 100;//A que altura se crean las plataformas
    this.gap = 200;

    

    var platformArr = [];
    var spikesArr = [];

    for (var i = 0; i < 100; i++)
    {
        platformArr.push(new Platform([0,0], game));
        spikesArr.push(new Spike([0,0], game));
    }

    poolPlat = new Pool(game, platformArr);
    poolSpike = new Pool(game, spikesArr);

    self = this;
}

var numberInRange = function(min, max)
{
    var int = Math.floor(Math.random()*(max-min+1)+min); 
    return int;
}

RandomGenerator.prototype.spawnPlatform  = function()
{
    var rnd;
    var newPlatform;
    var maxSpikes;
    var maxPlat;

    maxPlat = numberInRange(0,3);
    for (var i = 0; i < maxPlat; i++)//# of platforms
    {
        rnd = numberInRange(0, self._columns - 1);
        newPlatform = poolPlat.spawn(self._spawnPoints[rnd].x, self._spawnPoints[rnd].y);
        //newPlatform = poolPlat.spawn(rnd *100, rnd * 100);
      

        //maxSpikes = numberInRange(0, 4); 
        
        //for (var j = 0; j < maxSpikes; j++)
        //{
        //    var spikePos;

        //    rnd = numberInRange(0, 5); 

        //    spikePos = self.setSpikeSpawn(newPlatform, numberInRange(0, self._numberSpikes - 1));
        //    poolSpike.spawn(spikePos.x, spikePos.y);
        //}

        self.lastPlatform = newPlatform;
    }


}

RandomGenerator.prototype.checkSpawn = function()
{
    
    if (self.lastPlatform == null) {
        return true;
    } else
    {
        if (self.instiantiatePoint - self.lastPlatform.y >= self.gap) return true;
        else return false;
    }
   
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

RandomGenerator.prototype.update = function ()
{
    if (self.checkSpawn())
    {
        self.spawnPlatform();
    }
}



module.exports = RandomGenerator;