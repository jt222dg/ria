define(function(require) {
  
  // Required modules
  var Camera   = require('game/camera');
  
  var Game = function() {
    this._camera = new Camera();
    //addEventListener
    //removeEventListener
  };
  
  Game.prototype.onEvent = function() {
    // Empty stub
  };
  
  Game.prototype.onLogic = function(delta) {
    // Empty stub
  };
  
  Game.prototype.onRender = function(delta) {
    // Empty stub
  };
  
  Game.prototype.onCleanUp = function() {
    // Empty stub
  };
  
  return Game;
});