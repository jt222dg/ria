define(function(require) {
  
  // Required modules
  var Type         = require('ces/component/type');
  var Displacement = require('ces/component/displacement');
  var Velocity     = require('ces/component/velocity');
  var Appearance   = require('ces/component/appearance');
  var Physics      = require('ces/component/physics');
  var World        = require('ces/entity/world');
  
  var EntityManager = function(options) {
    
    this._world        = new World();
    this._ENTITY_COUNT = options && options.entitycount ? options.entitycount : 100;
    
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
  
  EntityManager.prototype.createPlayer = function(x, y, vx, vy, mass, w, h) {
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
      
      this._world.appearance[entity].color.r = 255;
      this._world.appearance[entity].color.g = 0;
      this._world.appearance[entity].color.b = 0;
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
      
      this._world.appearance[entity].color.r = 0;
      this._world.appearance[entity].color.g = 255;
      this._world.appearance[entity].color.b = 0;
    }
    
    return entity;
    
  };
  
  Object.defineProperty(EntityManager.prototype, "world", {
    get: function()      { return this._world; },
    set: function(world) { this._world = world; }
  });
  
  Object.defineProperty(EntityManager.prototype, "ENTITY_COUNT", {
    get: function()    { return this._ENTITY_COUNT; },
    set: function(ent) { if (ent >= 0) this._ENTITY_COUNT = ent; }
  });
  
  return EntityManager;
  
});