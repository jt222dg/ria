define(function(require) {
  
  // Required modules
  var _             = require('underscore');
  var EntityManager = require('ces/entity/entity-manager');
  var SystemManager = require('ces/system/system-manager');
  
  var StageOne = function() {
    this._addTimer = 0.0;
    
    this._systemManager = new SystemManager();
    this._entityManager = new EntityManager();
    this._entityManager.initWorld();
  };
  
  StageOne.prototype.onEvent = function() {
    // Empty stub
  };
  
  StageOne.prototype.onLogic = function(delta) {
    this._addTimer += delta;
      
    if (this._addTimer >= 0.05) {
      this._entityManager.createBox(
        750.0,                   // position x
        (Math.random()*340)+1,   // position y
        -(Math.random()*100)+50, // velocity x
        0.0,                     // velocity y
        1.0,                     // mass
        10.0,                    // width
        10.0                     // height
      );
      
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