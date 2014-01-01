define(function(require) {
  
  // Required modules
  var _             = require('underscore');
  var $             = require('jquery');
  var EntityManager = require('ces/entity/entity-manager');
  var SystemManager = require('ces/system/system-manager');
  
  var StageOne = function() {
    
    this._scoreboard = $('#scoreboard');
    
    this.onInit();
    
  };
  
  StageOne.prototype.onInit = function() {
    
    this._addTimer         = 0.0;
    this._addInterval      = 0.2;
    this._minAddInterval   = 0.025;
    
    this._score            = 0;
    this._scoreTimer       = 0.0;
    this._addScoreInterval = 0.1;
    
    this._isOver           = false;
    
    this._entityManager = new EntityManager({ entitycount : 300 });
    this._entityManager.initWorld();
    
    this._player = this._entityManager.createPlayer(25, 170, 0.0, 0.0, 1.0, 15.0, 15.0);
    
    this._systemManager = new SystemManager();
    this._systemManager.onInit();
    
  };
  
  StageOne.prototype.onEvent = function() {
    // Empty stub
  };
  
  StageOne.prototype.onLogic = function(delta) {
    
    console.log(delta);
    this._addTimer += delta;
    
    if (this._addTimer >= this._addInterval) {
      
      if (this._addInterval > this._minAddInterval) {
        this._addInterval -= 0.002;
      }
      
      var maxPosY = 360;
      var posY = Math.floor(Math.random() * maxPosY+1);
      
      var maxVelX = -120;
      var minVelX = -60;
      var velX = Math.floor(Math.random() * (maxVelX - (minVelX) + 1) + (minVelX));
      
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
    
    this._scoreTimer += delta;
    if (this._scoreTimer >= this._addScoreInterval) {
      this._score += 1;
      this._scoreTimer = 0.0;
      
      if (this._scoreboard) {
        this._scoreboard.html(this._score.toString());
      }
      
    }
    
    this._systemManager.onLogic(this._entityManager, delta);
    
    if (this._entityManager.world.physics[this._player].isDead) {
      this._isOver = true;
    }
  };
  
  StageOne.prototype.onRender = function(delta) {
    this._systemManager.onRender(this._entityManager);
  };
  
  StageOne.prototype.onCleanUp = function() {
    this._systemManager = undefined;
    this._entityManager = undefined;
  };
  
  StageOne.prototype.restart = function() {
    
    this.onCleanUp();
    this.onInit();
    
  };
  
  Object.defineProperty(StageOne.prototype, 'isOver', {
    get : function()   { return this._isOver; },
    set : function(iO) { /* METHOD STUB */    }
  });
  
  return StageOne;
  
});