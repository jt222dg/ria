define(function(require) {
  
  var GameHandler   = require('game/game-handler');
  var CanvasHandler = require('game/canvas-handler');
  var EventHandler  = require('game/event-handler');
  var StageOne      = require('game/controller/stage-one');
  
  var jasmine     = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/game-handler", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(GameHandler).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var gameHandler = new GameHandler();
        this.spec.expect(gameHandler).toBeDefined();
        this.spec.expect(gameHandler instanceof GameHandler).toBeTruthy();
        
      });
      
      env.describe("default values", function() {
    
        env.beforeEach(function() {
          
          this.gameHandler = new GameHandler();
          
        });
        
        env.afterEach(function() {
          
          this.gameHandler = undefined;
          
        });
        
        env.it('onInit initializes all private variables to their respective values and types', function() {
          
          this.spec.expect(this.gameHandler._requestId).toBeUndefined();
          this.spec.expect(this.gameHandler._running).toBeUndefined();
          this.spec.expect(this.gameHandler._canvasHandler).toBeUndefined();
          this.spec.expect(this.gameHandler._eventHandler).toBeUndefined();
          this.spec.expect(this.gameHandler._game).toBeUndefined();
          
          this.gameHandler.onInit();
          
          this.spec.expect(this.gameHandler._requestId).toBeDefined();
          this.spec.expect(this.gameHandler._requestId).toEqual(0);
          
          this.spec.expect(this.gameHandler._running).toBeDefined();
          this.spec.expect(this.gameHandler._running).toBeTruthy();
          
          this.spec.expect(this.gameHandler._canvasHandler).toBeDefined();
          this.spec.expect(this.gameHandler._canvasHandler instanceof CanvasHandler).toBeTruthy();
          
          this.spec.expect(this.gameHandler._eventHandler).toBeDefined();
          this.spec.expect(this.gameHandler._eventHandler instanceof EventHandler).toBeTruthy();
          
          this.spec.expect(this.gameHandler._game).toBeDefined();
          this.spec.expect(this.gameHandler._game instanceof StageOne).toBeTruthy();
          
        });
        
        env.it('onCleanUp sets _canvasHandler, _eventhandler and _game to undefined', function() {
          
          this.gameHandler.onInit();

          this.spec.expect(this.gameHandler._canvasHandler).toBeDefined();
          this.spec.expect(this.gameHandler._eventHandler).toBeDefined();
          this.spec.expect(this.gameHandler._game).toBeDefined();
          
          this.gameHandler.onCleanUp();
          
          this.spec.expect(this.gameHandler._canvasHandler).toBeUndefined();
          this.spec.expect(this.gameHandler._eventHandler).toBeUndefined();
          this.spec.expect(this.gameHandler._game).toBeUndefined();
          
        });

      });

    });
    
  });
  
});