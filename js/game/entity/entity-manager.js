define(function(require) {
  
  // Required modules
  var Type         = require('component/type');
  var Displacement = require('component/displacement');
  var Velocity     = require('component/velocity');
  var Appearance   = require('component/appearance');
  var Physics      = require('component/physics');
  var World        = require('entity/world');
  
  var EntityManager = function(world) {
    //this.initWorld();
    this._world = new World();
    this._ENTITY_COUNT = 10000;
  };
  
  EntityManager.prototype.initWorld = function() {
    for (var i = 0; i < this._ENTITY_COUNT; ++i) {
      this.destroyEntity(i);
      this._world.displacement[i] = new Displacement();
      this._world.velocity[i]     = new Velocity();
      this._world.appearance[i]   = new Appearance();
      this._world.physics[i]      = new Physics();
    }
  };
  
  EntityManager.prototype.createEntity = function() {
    for (var entity = 0; entity < this._ENTITY_COUNT; ++entity) {
      if (this._world.mask[entity] === Type.COMPONENT_NONE) {
        return entity;
      }
    }
    
    console.log("ERROR: No more entities left.");
    return this._ENTITY_COUNT;
  };
  
  EntityManager.prototype.destroyEntity = function(entity) {
    this._world.mask[entity] = Type.COMPONENT_NONE;
  };
  
  EntityManager.prototype.createTree = function(x, y) {
    var entity = this.createEntity();
    
    if (entity != this._ENTITY_COUNT) {
      this._world.mask[entity] = Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_APPEARANCE;
      
      this._world.displacement[entity].x = x;
      this._world.displacement[entity].y = y;
      
      this._world.appearance[entity].name = "Tree";
    }
    
    return entity;
  };
  
  EntityManager.prototype.createBox = function(x, y, vx, vy, mass, w, h) {
    var entity = this.createEntity();
    
    this._world.mask[entity] = (
      Type.COMPONENT_DISPLACEMENT |
      Type.COMPONENT_APPEARANCE   |
      Type.COMPONENT_VELOCITY     |
      Type.COMPONENT_PHYSICS
    );
    
    if (entity != this._ENTITY_COUNT) {
      this._world.displacement[entity].x = x;
      this._world.displacement[entity].y = y;
      
      this._world.velocity[entity].x = vx;
      this._world.velocity[entity].y = vy;
      
      this._world.physics[entity].mass = mass;
      this._world.physics[entity].w = w;
      this._world.physics[entity].h = h;
      
      this._world.appearance[entity].name = "Box";
    }
    
    return entity;
  };
  
  EntityManager.prototype.createGhost = function(x, y, vx, vy) {
    var entity = this.createEntity();
    if (entity != this._ENTITY_COUNT) {
      this._world.mask[entity] = Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_VELOCITY;
      
      this._world.displacement[entity].x = x;
      this._world._world.displacement[entity].y = y;
      
      this._world.velocity[entity].x = vx;
      this._world.velocity[entity].y = vy;
    }
    
    return entity;
  };
  
  Object.defineProperty(EntityManager.prototype, "world", {
    get: function()  { return this._world; },
    set: function(world) { }
  });
  
  Object.defineProperty(EntityManager.prototype, "ENTITY_COUNT", {
    get: function()  { return this._ENTITY_COUNT; },
    set: function(ent) { }
  });
  
  return EntityManager;
});