define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _         = require('underscore');
  
  var Velocity = function() {
    this._x = 0.0;
    this._y = 0.0;
  };
  
  _.extend(Velocity.prototype, Component.prototype);
  
  Object.defineProperty(Velocity.prototype, "x", {
    get: function()  { return this._x; },
    set: function(x) { this._x = x; }
  });
  
  Object.defineProperty(Velocity.prototype, "y", {
    get: function()  { return this._y; },
    set: function(y) { this._y = y; }
  });
  
  return Velocity;
});