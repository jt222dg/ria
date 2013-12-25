define(function(require) {
  
  var EntityManager = require('ces/entity/entity-manager');
  var World         = require('ces/entity/world');
  
  var Type          = require('ces/component/type');
  var Displacement  = require('ces/component/displacement');
  var Appearance    = require('ces/component/appearance');
  var Physics       = require('ces/component/physics');
  var Velocity      = require('ces/component/velocity');
  
  var jasmine       = require('jasmine-html');
  var _             = require('underscore');
  
  var env = jasmine.getEnv();
  
  return env.describe("game/entity/entity-manager", function() {
    
    env.beforeEach(function() {
      
      this.spec = env.currentSpec;
      
    });
    
    env.afterEach(function() {
      
      this.spec = undefined;
      
    });
    
    env.describe('initialization', function() {
      
      env.it('is defined', function() {
        
        this.spec.expect(EntityManager).toBeDefined();
        
      });
      
      env.it('can be instantiated', function() {
        
        var entityManager = new EntityManager();
        this.spec.expect(entityManager).toBeDefined();
        this.spec.expect(entityManager instanceof EntityManager).toBeTruthy();
        
      });
      
      env.it('passing _ENTITY_COUNT in as a paramter', function() {
        
        var entityManager = new EntityManager( { entitycount : 200 });
        var entityCount   = entityManager._ENTITY_COUNT;
        this.spec.expect(entityCount).toBeDefined();
        this.spec.expect(entityCount).toEqual(200);
        
      });
      
      env.it('initWorld() initialises a world of [ENTITY_COUNT] number of entities', function() {
        
        var entityManager = new EntityManager();
        this.spec.expect(entityManager.world.mask.length).toEqual(0);
        this.spec.expect(entityManager.world.displacement.length).toEqual(0);
        this.spec.expect(entityManager.world.velocity.length).toEqual(0);
        this.spec.expect(entityManager.world.appearance.length).toEqual(0);
        this.spec.expect(entityManager.world.physics.length).toEqual(0);
        
        _.each(entityManager.world.mask, function(mask) {
          this.spec.expect(mask).toBeUndefined();
        }, this);
        
        entityManager.initWorld();
        
        var entityCount = entityManager.ENTITY_COUNT;
        
        this.spec.expect(entityManager.world.mask.length).toEqual(entityCount);
        this.spec.expect(entityManager.world.displacement.length).toEqual(entityCount);
        this.spec.expect(entityManager.world.velocity.length).toEqual(entityCount);
        this.spec.expect(entityManager.world.appearance.length).toEqual(entityCount);
        this.spec.expect(entityManager.world.physics.length).toEqual(entityCount);
        
        _.each(entityManager.world.mask, function(mask) {
          this.spec.expect(mask).toBeDefined();
        }, this);
        
        _.each(entityManager.world.displacement, function(displacement) {
          this.spec.expect(displacement instanceof Displacement).toBeTruthy();
        }, this);
        
        _.each(entityManager.world.velocity, function(velocity) {
          this.spec.expect(velocity instanceof Velocity).toBeTruthy();
        }, this);
        
        _.each(entityManager.world.appearance, function(appearance) {
          this.spec.expect(appearance instanceof Appearance).toBeTruthy();
        }, this);
        
        _.each(entityManager.world.physics, function(physics) {
          this.spec.expect(physics instanceof Physics).toBeTruthy();
        }, this);
        
      });
      
    });
    
    env.describe('default values', function() {
      
      env.beforeEach(function() {
        
         this.entityManager = new EntityManager();
         
      });
      
      env.afterEach(function() {
        
        this.entityManager = undefined;
        
      });
      
      env.it('_world is defined and is an instance of World', function() {
        
        var world = this.entityManager._world;
        this.spec.expect(world).toBeDefined();
        this.spec.expect(world instanceof World).toBeTruthy();
        
      });
      
      env.it('_ENTITY_COUNT is defined and and is set to 100', function() {
        
        var entityCount = this.entityManager._ENTITY_COUNT;
        this.spec.expect(entityCount).toBeDefined();
        this.spec.expect(entityCount).toEqual(100);
        
      });
      
    });
    
    env.describe('using properties', function() {
      
      env.describe('getting and setting values', function() {
      
        env.beforeEach(function() {
         
         this.entityManager = new EntityManager();
         
        });
        
        env.afterEach(function() {
        
          this.entityManager = undefined;
        
        });
      
        env.it('can set _ENTITY_COUNT using ENTITY_COUNT', function() {
          
          this.entityManager.ENTITY_COUNT = 250;
          this.spec.expect(this.entityManager._ENTITY_COUNT).toEqual(250);
          
        });
        
        env.it('can\'t set _ENTITY_COUNT to a negative value using ENTITY_COUNT', function() {
          
          this.entityManager.ENTITY_COUNT = 75;
          this.spec.expect(this.entityManager.ENTITY_COUNT).toEqual(75);
          this.entityManager.ENTITY_COUNT = -300;
          this.spec.expect(this.entityManager.ENTITY_COUNT).toEqual(75);
          
        });
        
        env.it('can get _ENTITY_COUNT using ENTITY_COUNT', function() {
          
          this.entityManager._ENTITY_COUNT = 40;
          this.spec.expect(this.entityManager.ENTITY_COUNT).toEqual(40);
          
        });
        
        env.it('can set _world using world', function() {
          
          this.entityManager._world = undefined;
          this.entityManager.world  = new World();
          this.spec.expect(this.entityManager.world instanceof World).toBeTruthy();
          
        });
        
        env.it('can get _world using world', function() {
          
          this.spec.expect(this.entityManager.world instanceof World).toBeTruthy();
          
        });
        
      });
      
    });
    
    env.describe('general functionality', function() {
        
      env.beforeEach(function() {
       
       this.entityManager = new EntityManager();
       this.entityManager.initWorld();
       
      });
      
      env.afterEach(function() {
      
        this.entityManager = undefined;
      
      });
    
      env.it('createEntity returns the index of the first available entity in the world', function() {
        
        var entity = this.entityManager.createEntity();
        this.spec.expect(entity).toEqual(0);
        this.entityManager.world.mask[entity] = Type.COMPONENT_DISPLACEMENT;
        
        entity = this.entityManager.createEntity();
        this.spec.expect(entity).toEqual(1);
        
      });
      
      env.it('createEntity returns ENTITY_COUNT when no more enteties are available in the world', function() {

        var entity = -1;
        for (var i = 0, j = this.entityManager.ENTITY_COUNT + 1; i < j; ++i) {
          entity = this.entityManager.createEntity();
          this.entityManager.world.mask[entity] = Type.COMPONENT_DISPLACEMENT;
        }
        
        this.spec.expect(entity).toEqual(this.entityManager.ENTITY_COUNT);
        
      });
      
      env.it('deleteEntity removes an previously created entity', function() {
        
        var entity = this.entityManager.createEntity();
        this.entityManager.world.mask[entity] = Type.COMPONENT_DISPLACEMENT;
        this.spec.expect(this.entityManager.world.mask[entity]).toEqual(Type.COMPONENT_DISPLACEMENT);
        
        this.entityManager.destroyEntity(entity);
        this.spec.expect(this.entityManager.world.mask[entity]).toEqual(Type.COMPONENT_NONE);
        
      });
      
      env.it('createPlayer creates a player entity', function() {
        
        var playerMask = (
          Type.COMPONENT_DISPLACEMENT |
          Type.COMPONENT_APPEARANCE   |
          Type.COMPONENT_VELOCITY     |
          Type.COMPONENT_PHYSICS
        );
        
        var player = this.entityManager.createPlayer();
        this.spec.expect((this.entityManager.world.mask[player] & playerMask) === playerMask).toBeTruthy();
        
      });
      
      env.it('createBox creates a box entity', function() {
        
        var boxMask = (
          Type.COMPONENT_DISPLACEMENT |
          Type.COMPONENT_APPEARANCE   |
          Type.COMPONENT_VELOCITY     |
          Type.COMPONENT_PHYSICS
        );
        
        var box = this.entityManager.createBox();
        this.spec.expect((this.entityManager.world.mask[box] & boxMask) === boxMask).toBeTruthy();
        
      });
      
    });
    
  });
  
});