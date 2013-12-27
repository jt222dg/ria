define(function(require) {
  
  var MovementSystem = require('ces/system/movement-system');
  var EntityManager  = require('ces/entity/entity-manager');
  var Type           = require('ces/component/type');
  var jasmine        = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/movement-system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(MovementSystem).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var movementSystem = new MovementSystem();
        this.spec.expect(movementSystem).toBeDefined();
        this.spec.expect(movementSystem instanceof MovementSystem).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
    
      env.beforeEach(function() {
        
        this.movementSystem = new MovementSystem();
        
      });
      
      env.afterEach(function() {
        
        this.movementSystem = undefined;
        
      });
      
      env.it('_MOVEMENT_MASK is defined with the right value', function() {
      
        var mask = this.movementSystem._MOVEMENT_MASK;
        this.spec.expect(mask & Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_VELOCITY).toBeTruthy();
        
      });
      
    });
  
    env.describe('general functionality', function() {
    
      env.beforeEach(function() {
        
        this.movementSystem = new MovementSystem();
        
        this.entityManager = new EntityManager();
        this.entityManager.initWorld();
        this.player = this.entityManager.createPlayer(1.5, 1.5, 2.0, 3.0, 1.0, 5.0, 5.0);
        this.entity = this.entityManager.createEntity();
        this.entityManager.world.mask[this.entity] = (
          Type.COMPONENT_DISPLACEMENT |
          Type.COMPONENT_APPEARANCE
        );
        this.entityManager.world.displacement[this.entity].x = 1.0;
        this.entityManager.world.displacement[this.entity].y = 1.0;
        
        this.delta = 0.016;
        
      });
      
      env.afterEach(function() {
        
        this.movementSystem = undefined;
        this.entityManager  = undefined;
        
      });
      
      env.it('onRun() only affets enteties that has a MOVEMENT_MASK', function() {
      
        var startPlayerX = this.entityManager.world.displacement[this.player].x;
        var startPlayerY = this.entityManager.world.displacement[this.player].y;
        var startEntityX = this.entityManager.world.displacement[this.entity].x;
        var startEntityY = this.entityManager.world.displacement[this.entity].y;
        
        this.movementSystem.onRun(this.entityManager, this.delta);
        
        this.spec.expect(this.entityManager.world.displacement[this.player].x).not.toEqual(startPlayerX);
        this.spec.expect(this.entityManager.world.displacement[this.player].y).not.toEqual(startPlayerY);
        this.spec.expect(this.entityManager.world.displacement[this.entity].x).toEqual(startEntityX);
        this.spec.expect(this.entityManager.world.displacement[this.entity].y).toEqual(startEntityY);
        
      });
      
      env.it('onRun() moves enteties a corret distance ', function() {
      
        this.spec.expect(this.entityManager.world.displacement[this.player].x).toEqual(1.5);
        this.spec.expect(this.entityManager.world.displacement[this.player].y).toEqual(1.5);
        
        this.movementSystem.onRun(this.entityManager, this.delta);
        
        this.spec.expect(this.entityManager.world.displacement[this.player].x).toEqual(1.532);
        this.spec.expect(this.entityManager.world.displacement[this.player].y).toEqual(1.548);
        
      });
      
    });
    
  });
  
});