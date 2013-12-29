define(function(require) {
  
  var CollisionSystem = require('ces/system/collision-system');
  var EntityManager   = require('ces/entity/entity-manager');
  var Type            = require('ces/component/helpers/type');
  var jasmine         = require('jasmine-html');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/system/collision-system", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(CollisionSystem).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var collisionSystem = new CollisionSystem();
        this.spec.expect(collisionSystem).toBeDefined();
        this.spec.expect(collisionSystem instanceof CollisionSystem).toBeTruthy();
        
      });
      
    });
    
    env.describe('default values', function() {
    
      env.beforeEach(function() {
        
        this.collisionSystem = new CollisionSystem();
        
      });
      
      env.afterEach(function() {
        
        this.collisionSystem = undefined;
        
      });
      
      env.it('_COLLISION_MASK is defined with the right value', function() {
      
        var mask = this.collisionSystem._COLLISION_MASK;
        this.spec.expect(mask & Type.DISPLACEMENT | Type.PHYSICS).toBeTruthy();
        
      });
      
    });
  
    env.describe('general functionality', function() {
    
      env.beforeEach(function() {
        
        this.collisionSystem = new CollisionSystem();
        
        this.entityManager = new EntityManager();
        this.entityManager.initWorld();
        
        this.collisionEntity = this.entityManager.createEntity();
        this.entityManager.world.mask[this.collisionEntity] = (
          Type.DISPLACEMENT |
          Type.PHYSICS
        );
        
        this.entityManager.world.displacement[this.collisionEntity].x = -10.0;
        this.entityManager.world.displacement[this.collisionEntity].y = 1.0;
        
        this.entity = this.entityManager.createEntity();
        this.entityManager.world.mask[this.entity] = (
          Type.DISPLACEMENT |
          Type.VELOCITY     |
          Type.APPEARANCE
        );
        
        this.entityManager.world.displacement[this.entity].x = -10.0;
        this.entityManager.world.displacement[this.entity].y = 1.0;
        
      });
      
      env.afterEach(function() {
        
        this.collisionSystem = undefined;
        this.entityManager  = undefined;
        
      });
      
      env.it('onRun() only removes enteties that has a COLLISION_MASK', function() {
        
        var entMask    = this.entityManager.world.mask[this.entity];
        var colEntMask = this.entityManager.world.mask[this.collisionEntity];
        
        this.spec.expect(entMask).not.toEqual(Type.NONE);
        this.spec.expect(colEntMask).not.toEqual(Type.NONE);
        
        this.collisionSystem.onRun(this.entityManager);
        
        entMask    = this.entityManager.world.mask[this.entity];
        colEntMask = this.entityManager.world.mask[this.collisionEntity];
        
        this.spec.expect(entMask).not.toEqual(Type.NONE);
        this.spec.expect(colEntMask).toEqual(Type.NONE);
        
      });
    });
    
  });
  
});