define(function(require) {
  
  // Required modules
  var Raf           = require('utility/raf');
  var CanvasHandler = require('game/canvas-handler');
  
  // Internal varaibles
  var requestId = 0;
  var running   = true;
  
  var Game     = require('game/controller/game');
  var StageOne = require('game/controller/game-stage01');
  
  function onInit() {
    
  }
  
  function onCleanup() {
    
  }
  
  function runLoop() {
    var startTime = Date.now();
    var endTime  = startTime;
    var delta    = 0;
    
    var canvasHandler = new CanvasHandler();
    var game = new StageOne();
    running = true;
    
    (function loop(){
      if (running) {  
        requestId = Raf.requestAnimFrame.call(window, loop);
      }
      
      startTime = Date.now();
      delta     = (startTime - endTime) / 1000;
      delta     = delta < 0.016 ? delta : 0.016;
      endTime   = startTime;
      
      game.onLogic(delta);
      
      canvasHandler.clearScreen();
      game.onRender(delta);
    })();
  }
  
  function stopLoop() {
    Raf.clearRequestInterval.call(window, requestId);
    running = false;
  }
  
  return {
    startGame : function() {
      runLoop();
    },
    
    stopGame : function() {
      stopLoop();
    }
  };
});