define(function(require) {
  
  var SystemManager   = require('ces/system/system-manager');
  var MovementSystem  = require('ces/system/movement-system');
  var RenderSystem    = require('ces/system/render-system');
  var CollisionSystem = require('ces/system/collision-system');
  
  var jasmine         = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/system-manager", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {

        this.spec.expect(SystemManager).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var systemManager = new SystemManager();
        this.spec.expect(systemManager).toBeDefined();
        this.spec.expect(systemManager instanceof SystemManager).toBeTruthy();
        
      });
      
    });
    
    env.describe('default vaules', function() {
      
      env.beforeEach(function() {
        
        this.systemManager = new SystemManager();
        
      });
      
      env.afterEach(function() {
        
        this.systemManager = undefined;
        
      });
      
      env.it('_movementSystem is defined and is an instans of MovementSystem', function() {
        
        this.spec.expect(this.systemManager._movementSystem).toBeDefined();
        this.spec.expect(this.systemManager._movementSystem instanceof MovementSystem).toBeTruthy();
        
      });
      
      env.it('_collisionSystem is defined and is an instans of CollisionSystem', function() {
        
        this.spec.expect(this.systemManager._collisionSystem).toBeDefined();
        this.spec.expect(this.systemManager._collisionSystem instanceof CollisionSystem).toBeTruthy();
        
      });
      
      env.it('_renderSystem is defined and is an instans of RenderSystem', function() {
        
        this.spec.expect(this.systemManager._renderSystem).toBeDefined();
        this.spec.expect(this.systemManager._renderSystem instanceof RenderSystem).toBeTruthy();
        
      });
      
    });
    
    env.describe('general functionality', function() {
      
      env.beforeEach(function() {
        
        this.systemManager = new SystemManager();
        
      });
      
      env.afterEach(function() {
        
        this.systemManager = undefined;
        
      });
      
      env.it('onLogic() calls _movementSystem.onRun() and _collisionSystem.onRun()', function() {
        
        this.spec.spyOn(this.systemManager._movementSystem, 'onRun');
        this.spec.spyOn(this.systemManager._collisionSystem, 'onRun');
        
        this.systemManager.onLogic();
        
        this.spec.expect(this.systemManager._movementSystem.onRun).toHaveBeenCalled();
        this.spec.expect(this.systemManager._collisionSystem.onRun).toHaveBeenCalled();
        
      });
      
      env.it('onRender() calls _renderSystem.onRun()', function() {
        
        this.spec.spyOn(this.systemManager._renderSystem, 'onRun');
        
        this.systemManager.onRender();
        
        this.spec.expect(this.systemManager._renderSystem.onRun).toHaveBeenCalled();
        
      });
      
      env.it('onCleanUp() sets all variables to undefined', function() {
        
        this.systemManager.onCleanUp();
        
        this.spec.expect(this.systemManager._movementSystem).toBeUndefined();
        this.spec.expect(this.systemManager._collisionSystem).toBeUndefined();
        this.spec.expect(this.systemManager._renderSystem).toBeUndefined();
        
      });
      
    });
    
  });
  
});