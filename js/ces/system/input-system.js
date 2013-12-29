define(function(require) {
  
  var System = require('ces/system/system');
  var Type   = require('ces/component/helpers/type');
  var World  = require('ces/entity/world');
  var _      = require('underscore');
  
  var InputSystem = function() {
    
    this._INPUT_MASK   = Type.INPUT;
    this._CONTROL_MASK = Type.INPUT | Type.DISPLACEMENT;
    
    this._keys = {
      W : false,
      A : false,
      S : false,
      D : false
    };
    
  };
  
  _.extend(InputSystem, System);
  
  InputSystem.prototype.onKeyDown = function(event) {
    
    switch (event.keyCode) {
      case 87: this._Keys.W = true; break;
      case 65: this._Keys.A = true; break;
      case 83: this._Keys.S = true; break;
      case 68: this._Keys.D = true; break;
      default: break;
    }
    
  };
  
  InputSystem.prototype.onKeyUp = function(event) {
    
    switch (event.keyCode) {
      case 87: this._Keys.W = false; break;
      case 65: this._Keys.A = false; break;
      case 83: this._Keys.S = false; break;
      case 68: this._Keys.D = false; break;
      default: break;
    }
    
  };
  
  InputSystem.prototype.onInit = function() {
    
    window.addEventListener('keydown', this.onKeyDown, false);
    window.addEventListener('keyup',   this.onKeyUp,   false);
    
  };
  
  InputSystem.prototype.onRun = function(entityManager) {
    
    var world        = entityManager.world;
    var ENTITY_COUNT = entityManager.ENTITY_COUNT;
    
    if (!(world instanceof World)) return;
    
    for (var entity = 0; entity < ENTITY_COUNT; ++entity) {
      if ((world.mask[entity] & this._CONTROL_MASK) === this._CONTROL_MASK) {
        
        // TODO: implement input component in world and here as well as in tests
        // and change its name to control component
        
      }
    }
    
  };
  
  InputSystem.prototype.onCleanUp = function() {
    
    window.removeEventListener('keydown', this.onKeyDown, false);
    window.removeEventListener('keyup',   this.onKeyUp,   false);
    
  };
  
  return InputSystem;
  
});