define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _         = require('underscore');
  
  var Physics = function() {
    
    this._mass  = 0.0;
    this._w     = 0.0;
    this._h     = 0.0;
    this._alive = true;
    
  };
  
  _.extend(Physics.prototype, Component.prototype);
  
  Object.defineProperty(Physics.prototype, "mass", {
    get: function()     { return this._mass; },
    set: function(mass) { this._mass = mass; }
  });
  
  Object.defineProperty(Physics.prototype, "w", {
    get: function()  { return this._w; },
    set: function(w) { this._w = w; }
  });
  
  Object.defineProperty(Physics.prototype, "h", {
    get: function()  { return this._h; },
    set: function(h) { this._h = h; }
  });
  
  return Physics;
  
});