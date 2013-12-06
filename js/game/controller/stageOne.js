define(function(require) {
  
  // Required modules
  var _             = require('underscore');
  var EntityManager = require('entity/entity-manager');
  var SystemManager = require('system/system-manager');
  
  var StageOne = function() {
    this._addTimer = 0.0;
    
    this._systemManager = new SystemManager();
    this._entityManager = new EntityManager();
    this._entityManager.initWorld();
    this._entityManager.createBox(750.0, (Math.random()*340)+1, -60.0, 0.0, 1.0, 10.0, 10.0);
  };
  
  StageOne.prototype.onEvent = function() {
    // Empty stub
  };
  
  StageOne.prototype.onLogic = function(delta) {
    this._addTimer += delta;
      
    if (this._addTimer >= 0.05) {
      this._entityManager.createBox(750.0, (Math.random()*340)+1, -60.0, 0.0, 1.0, 10.0, 10.0);
      this._addTimer = 0.0;
    }
    
    this._systemManager.onLogic(this._entityManager, delta);
  };
  
  StageOne.prototype.onRender = function(delta) {
    this._systemManager.onRender(this._entityManager);
  };
  
  StageOne.prototype.onCleanUp = function() {
    // Empty stub
  };
  
  StageOne.prototype.restart = function() {
    this._entityManager.initWorld();
  };
  
  return StageOne;
});