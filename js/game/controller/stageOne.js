define(function(require) {
  
  // Required modules
  var _             = require('underscore');
  var EntityManager = require('ces/entity/entity-manager');
  var SystemManager = require('ces/system/system-manager');
  
  var StageOne = function() {
    this._addTimer       = 0.0;
    this._addInterval    = 0.5;
    this._minAddInterval = 0.015;
    
    this._systemManager = new SystemManager();
    this._entityManager = new EntityManager({ entitycount : 350 });
    this._entityManager.initWorld();
  };
  
  StageOne.prototype.onEvent = function() {
    // Empty stub
  };
  
  StageOne.prototype.onLogic = function(delta) {
    this._addTimer += delta;
      
    if (this._addTimer >= this._addInterval) {
      
      if (this._addInterval > this._minAddInterval) {
        this._addInterval -= 0.002;
      }
      
      var maxPosY = 340;
      var posY = Math.floor(Math.random() * maxPosY+1);
      
      var maxVelX = -120;
      var minVelX = -60;
      var velX = Math.floor(Math.random() * (maxVelX - (minVelX) + 1) + (minVelX));
      
      console.log(velX);
      this._entityManager.createBox(
        750.0, // position x
        posY,  // position y
        velX,  // velocity x
        0.0,   // velocity y
        1.0,   // mass
        10.0,  // width
        10.0   // height
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