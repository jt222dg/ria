define(function(require) {
  
  var System = require('ces/system/system');
  var Type   = require('ces/component/helpers/type');
  var World  = require('ces/entity/world');
  var _      = require('underscore');
  
  var InputSystem = function() {
    
    this._CONTROL_MASK = Type.CONTROLS | Type.DISPLACEMENT;
    
    this._keys = {
      W : false,
      A : false,
      S : false,
      D : false
    };
    
  };
  
  _.extend(InputSystem, System);
  
  InputSystem.prototype.onInit = function() {
    
    var self = this;
    window.addEventListener('keydown', function(event) { self.onKeyDown(event) }, false);
    window.addEventListener('keyup',   function(event) { self.onKeyUp(event)   }, false);
    
  };
  
  InputSystem.prototype.onRun = function(entityManager) {
    
    var world        = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      if ((world.mask[entity] & this._CONTROL_MASK) === this._CONTROL_MASK) {
        
        var m = world.controls[entity].actions.MOVING;
        m.UP    = this._keys.W;
        m.LEFT  = this._keys.A;
        m.DOWN  = this._keys.S;
        m.RIGHT = this._keys.D;
        
      }
    }
    
  };
  
  InputSystem.prototype.onCleanUp = function() {
    
    window.removeEventListener('keydown', this.onKeyDown, false);
    window.removeEventListener('keyup',   this.onKeyUp,   false);
    
  };
  
  InputSystem.prototype.onKeyDown = function(event) {
    
    switch (event.keyCode) {
      case 87: this._keys.W = true; break;
      case 65: this._keys.A = true; break;
      case 83: this._keys.S = true; break;
      case 68: this._keys.D = true; break;
      default: break;
    }
    
  };
  
  InputSystem.prototype.onKeyUp = function(event) {
    
    switch (event.keyCode) {
      case 87: this._keys.W = false; break;
      case 65: this._keys.A = false; break;
      case 83: this._keys.S = false; break;
      case 68: this._keys.D = false; break;
      default: break;
    }
    
  };
  
  return InputSystem;
  
});