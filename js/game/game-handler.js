define(function(require) {
  
  // Required modules
  var Raf           = require('utility/raf');
  var CanvasHandler = require('game/canvas-handler');
  var EventHandler  = require('game/event-handler');
  var StageOne      = require('game/controller/stageOne');
  
  var requestId = 0;
  var running   = true;
    
  var GameHandler = function() {
    
  };
  
  GameHandler.prototype.startGame = function() {
    
    var startTime = Date.now();
    var endTime   = startTime;
    var delta     = 0.0;
    
    var canvasHandler = new CanvasHandler();
    var eventHandler  = new EventHandler();
    var game          = new StageOne();
    var score         = 0;
    
    running = true;
    
    (function loop(){
      if (running) {  
        requestId = Raf.requestAnimFrame.call(window, loop);
      }
      
      startTime = Date.now();
      delta     = (startTime - endTime) / 1000;
      delta     = delta < 0.016 ? delta : 0.016;
      endTime   = startTime;

      if (!eventHandler.getKeys().P) {
        game.onLogic(delta);
      }
      
      if (eventHandler.getKeys().N) {
        game.restart();
        eventHandler.getKeys().N = !eventHandler.getKeys().N;
      }
      
      canvasHandler.clearScreen();
      game.onRender(delta);
    })();
  };
  
  GameHandler.prototype.stopGame = function() {
    Raf.clearRequestInterval.call(window, requestId);
    running = false;
  };
  
  return GameHandler;
});