define(function(require) {
  
  // Required modules
  var System        = require('system/system');
  var World         = require('entity/world');
  var Type          = require('component/type');
  var _             = require('underscore');
  var $             = require('jquery');
  
  var RENDER_MASK   = Type.COMPONENT_DISPLACEMENT | Type.COMPONENT_APPEARANCE;
  
  var RenderSystem = function() {
    this._ctx = undefined;
    var canvas = $('#canvas').get(0);
    if (canvas !== undefined) {
      this._ctx = canvas.getContext("2d");
    }
  };
  
  _.extend(RenderSystem, System);
  
  RenderSystem.prototype.onRun = function(entityManager) {
    var world = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
      
    var d;
    var a;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      if ((world.mask[entity] & RENDER_MASK) === RENDER_MASK) {
        
        d = world.displacement[entity];
        a = world.appearance[entity];
        
        this._ctx.fillStyle = "rgb(200,0,0)";
        this._ctx.fillRect(d.x, d.y, 10.0, 10.0);
      }
    }
  };
  
  return RenderSystem;
});