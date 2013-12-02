define(function(require) {
  
  // Required modules
  var Game     = require('game/controller/game');
  var _        = require('underscore');
  
  var Menu = function() {
  };
  
  _.extend(Menu.prototype, Game.prototype);
  
  Menu.prototype.onEvent = function() {
    // Empty stub
  };
  
  Menu.prototype.onLogic = function(delta) {
  };
  
  Menu.prototype.onRender = function(delta) {
  };
  
  Menu.prototype.onCleanUp = function() {
    // Empty stub
  };
  
  return Menu;
});