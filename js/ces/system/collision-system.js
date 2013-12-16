define(function(require) {
  
  // Required modules
  var System        = require('ces/system/system');
  var World         = require('ces/entity/world');
  var Type          = require('ces/component/type');
  var _             = require('underscore');
  var $             = require('jquery');
  
  var COLLISION_MASK = Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_APPEARANCE;
  var VELOCITY_MASK  = Type.COMPONENT_VELOCITY;
  
  var CollisionSystem = function() {
    this._canvas = $('#canvas').get(0);
  };
  
  _.extend(CollisionSystem, System);
  
  CollisionSystem.prototype.onRun = function(entityManager) {
    var world = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
      
    var d;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      if ((world.mask[entity] & COLLISION_MASK) === COLLISION_MASK) {
        
        d = world.displacement[entity];
        
        if (d.x < -10) {
          entityManager.destroyEntity(entity);
          console.log("destroyed entity");
        }
      }
    }
  };
  
  return CollisionSystem;
});