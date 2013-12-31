define(function(require) {
  
  // Required modules
  var Raf           = require('utility/raf');
  var CanvasHandler = require('game/canvas-handler');
  var EventHandler  = require('game/event-handler');
  var StageOne      = require('game/controller/stage-one');
  
  var GameHandler = function() {
  };
  
  GameHandler.prototype.onInit = function() {
    
    this._requestId     = 0;
    this._running       = true;
    
    this._canvasHandler = new CanvasHandler();
    this._eventHandler  = new EventHandler();
    this._game          = new StageOne();
    this._game.onInit();
    
  };
  
  GameHandler.prototype.onCleanUp = function() {

    this._canvasHandler = undefined;
    this._eventHandler  = undefined;
    this._game          = undefined;
    
  };
  
  GameHandler.prototype.startGame = function() {
    
    var startTime = Date.now();
    var endTime   = startTime;
    var delta     = 0.0;
    var score     = 0;
    
    this.onInit();
    this._running = true;
    
    var that = this;
    (function loop(){
      
      if (that._running) {  
        that._requestId = Raf.requestAnimFrame.call(window, loop);
      }
      
      if (that._eventHandler && that._canvasHandler && that._game) {
      
        startTime = Date.now();
        delta     = (startTime - endTime) / 1000;
        delta     = delta < 0.016 ? delta : 0.016;
        endTime   = startTime;
  
        if (!that._eventHandler.getKeys().P) {
          that._game.onLogic(delta);
        }
        
        if (that._eventHandler.getKeys().N) {
          that._game.restart();
          that._eventHandler.getKeys().N = !that._eventHandler.getKeys().N;
        }
        
        that._canvasHandler.clearScreen();
        that._game.onRender(delta);
        
        if (that._game.isOver) {
          that.showMenuScreen();
          that.stopGame();
        }
      
      }
          
    })();
  };
  
  GameHandler.prototype.showMenuScreen = function() {
    
    this._canvasHandler.grayScreen();
    
  };
  
  GameHandler.prototype.stopGame = function() {
    
    this._running = false;
    Raf.clearRequestInterval.call(window, this._requestId);
    this.onCleanUp();
    
  };
  
  return GameHandler;
  
});