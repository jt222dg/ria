define(function(require) {
  
  // Required modules
  var System = require('ces/system/system');
  var World  = require('ces/entity/world');
  var Type   = require('ces/component/helpers/type');
  var _      = require('underscore');
  var $      = require('jquery');
  
  var CollisionSystem = function() {
    
    this._canvas = $('#canvas').get(0);
    this._COLLISION_MASK = Type.DISPLACEMENT    | Type.PHYSICS;
    this._PLAYER_MASK    = Type.DISPLACEMENT    | Type.PHYSICS | Type.CONTROLS;
    
  };
  
  _.extend(CollisionSystem, System);
  
  CollisionSystem.prototype.onRun = function(entityManager) {
    
    var world        = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
      
    var d;
    var p;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      
      if ((world.mask[entity] & this._PLAYER_MASK) === this._PLAYER_MASK) {
        
        d = world.displacement[entity];
        p = world.physics[entity];
        
        for (var enemy = 0; enemy < ENTITY_COUNT; ++enemy) {
          
          if ((world.mask[enemy] & this._COLLISION_MASK) === this._COLLISION_MASK) {
            
            // Don't check collision vs yourself
            if (enemy != entity) {
                  
              var eD = world.displacement[enemy];
              var eP = world.physics[enemy];
              
              var a = {
                x : d.x+2,
                y : d.y+2,
                w : p.w-4,
                h : p.h-4
              };
              
              var b = {
                x : eD.x+2,
                y : eD.y+2,
                w : eP.w-4,
                h : eP.h-4
              };
              
              // If collided according to simple AABB collision detection
              if (
                (a.x + a.w > b.x && a.x < b.x + b.w) &&
                (a.y + a.h > b.y && a.y < b.y + b.h)
              ) {
                p.isDead = true;
              }
              
            }
            
          }
          
        }
        
      } else if ((world.mask[entity] & this._COLLISION_MASK) === this._COLLISION_MASK) {
        
        d = world.displacement[entity];
        
        if (d.x <= -10) {
          entityManager.destroyEntity(entity);
          console.log("destroyed entity");
        }
      }
    }
  };
  
  return CollisionSystem;
  
});