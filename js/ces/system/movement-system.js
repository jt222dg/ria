define(function(require) {
  
  // Required modules
  var System = require('ces/system/system');
  var World  = require('ces/entity/world');
  var Type   = require('ces/component/type');
  var _      = require('underscore');
  
  var MOVEMENT_MASK = Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_VELOCITY;
  
  var MovementSystem = function() {
    
  };
  
  _.extend(MovementSystem, System);
  
  MovementSystem.prototype.onRun = function(entityManager, delta) {
    var world        = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
    
    var v;
    var d;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      if ((world.mask[entity] & MOVEMENT_MASK) === MOVEMENT_MASK) {
        v = world.velocity[entity];
        d = world.displacement[entity];
        
        d.x += v.x * delta;
        d.y += v.y * delta;
      }
    }
  };
  
  return MovementSystem;
});