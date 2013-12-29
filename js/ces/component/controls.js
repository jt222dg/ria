define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _         = require('underscore');
  
  var Controls = function() {
    
    this._actions = {
      MOVING : {
        UP    : false,
        DOWN  : false,
        LEFT  : false,
        RIGHT : false
      }
    };
    
  };
  
  _.extend(Controls.prototype, Component.prototype);
  
  Object.defineProperty(Controls.prototype, 'actions', {
    get : function()         { return this._actions },
    set : function (actions) { /* Empty stub */  }
  });
  
  return Controls;
  
});