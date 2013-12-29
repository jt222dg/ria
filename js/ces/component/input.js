define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _         = require('underscore');
  
  var Input = function() {
    
    this._actions = {
      MOVING : {
        UP    : false,
        DOWN  : false,
        LEFT  : false,
        RIGHT : false
      }
    };
    
  };
  
  _.extend(Input.prototype, Component.prototype);
  
  Object.defineProperty(Input.prototype, 'actions', {
    get : function()         { return this._actions },
    set : function (actions) { /* Empty stub */  }
  });
  
  return Input;
  
});