define(function(require) {
  
  // Required modules
  var System = require('ces/system/system');
  var World  = require('ces/entity/world');
  var Type   = require('ces/component/helpers/type');
  var _      = require('underscore');
  var $      = require('jquery');
  
  var RenderSystem = function() {
    
    this._RENDER_MASK = Type.DISPLACEMENT | Type.APPEARANCE;
    
    this._ctx    = undefined;
    this._width  = 0;
    this._height = 0;
    
    var canvas = $('#canvas').get(0);
    if (canvas !== undefined) {
      this._ctx    = canvas.getContext("2d");
      this._width  = canvas.width;
      this._height  = canvas.height;
    }
    
    
  };
  
  _.extend(RenderSystem, System);
  
  RenderSystem.prototype.onRun = function(entityManager) {
    
    var world        = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
      
    var d;
    var a;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      
      if ((world.mask[entity] & this._RENDER_MASK) === this._RENDER_MASK) {
        
        d = world.displacement[entity];
        a = world.appearance[entity];
        
        if (
          d.x > 0 && d.x < this._width &&
          d.y > 0 && d.y < this._height
        ) {
          this._ctx.fillStyle = a.toString();
          this._ctx.fillRect(d.x, d.y, 10.0, 10.0);
        }
        
      }
    }
    
  };
  
  return RenderSystem;
  
});