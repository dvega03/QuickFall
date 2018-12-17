'use strict'

function Pool(game, entities)
{
    this._group = game.add.group();
    this._group.addMultiple(entities);

    //game.physics.startSystem(Phaser.Physics.P2JS);
    ////var _platformCollisionGroup = game.physics.p2.createCollisionGroup();
    //game.physics.p2.enable(this._group, true);
    ////this._group.physicsBodyType = Phaser.Physics.P2JS;

    this._group.callAll('kill');
}

Pool.prototype.spawn = function (x,y)
{
    var entity = this._group.getFirstExists(false);
    if (entity)
    {
        entity.reset(x,y);
    }

    return entity;
}

module.exports = Pool;