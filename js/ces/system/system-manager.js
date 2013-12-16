define(function(require){
  
  var MovementSystem  = require('ces/system/movement-system');
  var CollisionSystem = require('ces/system/collision-system');
  var RenderSystem    = require('ces/system/render-system');
  
  var SystemManager = function() {
    this._movementSystem  = new MovementSystem();
    this._renderSystem    = new RenderSystem();
    this._collisionSystem = new CollisionSystem();
  };
  
  SystemManager.prototype.onEvent = function() {
    
  };
  
  SystemManager.prototype.onLogic = function(entityManager, delta) {
    this._movementSystem.onRun(entityManager, delta);
    this._collisionSystem.onRun(entityManager);
  };
  
  SystemManager.prototype.onRender = function(entityManager) {
    this._renderSystem.onRun(entityManager);
  };
  
  SystemManager.prototype.onCleanUp = function() {
    
  };
  
  return SystemManager;
});