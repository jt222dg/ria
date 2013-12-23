define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _ = require('underscore');
  
  var Appearance = function() {
    this._color = {
      r : 0,
      g : 0,
      b : 0
    }
  };
  
  _.extend(Appearance.prototype, Component.prototype);
  
  Object.defineProperty(Appearance.prototype, "color", {
    get: function()     { return this._color; },
    set: function(color) { this._color = color; }
  });
  
  Appearance.prototype.toString = function() {
    
    return (
      "rgb(" +
      this.color.r +
      "," +
      this.color.g +
      "," +
      this.color.b +
      ")"
    );
  };
  
  return Appearance;
});