define(function(require) {
  
  // Required Modules
  var Component = require('ces/component/component');
  var _ = require('underscore');
  
  var Appearance = function() {
    this._name = "";
  };
  
  _.extend(Appearance.prototype, Component.prototype);
  
  Object.defineProperty(Appearance.prototype, "name", {
    get: function()     { return this._name; },
    set: function(name) { this._name = name; }
  });
  
  return Appearance;
});