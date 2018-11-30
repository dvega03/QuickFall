'use strict'

function Pool(game, entities)
{
    this._group = game.add.group();
    this._group.addMultiple(entities);
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

Pool.prototype.setPhysics = function (collisionGroup)
{
    this._group.forEach(element => {
        element.body.setCollisionGroup(collisionGroup);
    });
}
module.exports = Pool;