define(function(require) {
  
  // Required Modules
  var Component = require('component/component');
  var _         = require('underscore');
  
  var Displacement = function() {
    this._x = 0.0;
    this._y = 0.0;
  };
  
  _.extend(Displacement.prototype, Component.prototype);
  
  Object.defineProperty(Displacement.prototype, "x", {
    get: function()  { return this._x; },
    set: function(x) { this._x = x; }
  });
  
  Object.defineProperty(Displacement.prototype, "y", {
    get: function()  { return this._y; },
    set: function(y) { this._y = y; }
  });
  
  return Displacement;
});