'use strict';
function Points(position)
{
    this.game = null; 
    this.score = null;
    this.scoreText= null;
    this._position = position;
    //this._graphic = graphic;
    this.color = null;

}

    Points.prototype.addPoints = function()
    {
        this.score += addValue;
    }
    
    Points.prototype.multiplyPoints = function()
    {
        this.score *= mulValue;
    }
    
    Points.prototype.resetPoints = function() { this.score = 0; }
    
    Points.prototype.updateText = function()
    {
        this.scoreText.text = 'Score : ' + this.score;
    }
    
    Points.prototype.createText = function()
    {
        this.scoreText = this.game.add.text(this._position.x, this._position.y, 'Score : 0',{fill : '#000000'});
    }
    
    Points.prototype.update = function()
    {
        this.score++;
    }




module.exports = Points;