define(function(require) {
  
  // Required modules
  var Game = require('game/controller/main');
  
  return {
    startGame : function() {
      Game.run();
    },
    
    stopGame : function() {
      Game.stop();
    }
  };
});