define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var Color     = require('ces/component/helpers/color');
  var _         = require('underscore');
  
  var Appearance = function() {
    this._color = new Color();
  };
  
  _.extend(Appearance.prototype, Component.prototype);
  
  Object.defineProperty(Appearance.prototype, "color", {
    get: function()      { return this._color; },
    set: function(color) { this._color = color; }
  });
  
  Appearance.prototype.toString = function() {
    
    return (
      "rgba("      +
      this.color.r +
      ","          +
      this.color.g +
      ","          +
      this.color.b +
      ","          +
      this.color.a +
      ")"
    );
  };
  
  return Appearance;
  
});